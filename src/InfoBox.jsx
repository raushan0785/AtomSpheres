import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    if (!info) return null;  // Don't show anything if info is null

    const IMG = "https://source.unsplash.com/400x200/?weather," + info.city;

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMG}
                    title={info.city}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Min: {info.tempmin}&deg;C | Max: {info.tempmax}&deg;C</p>
                        <p>Condition: {info.humidity}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
