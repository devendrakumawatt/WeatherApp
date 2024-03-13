import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    const IniUrl = "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={IniUrl} title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp; {info.humidity > 80 
                            ? <ThunderstormIcon/>
                            : info.temp > 15 
                            ? <WbSunnyIcon/>
                            : <AcUnitIcon/> }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}</p>
                            <p>Max Temp = {info.tempMax}</p>
                            <p>The weather can be described as <i>{info.weather}</i> feels like <i> {info.feelslike}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};