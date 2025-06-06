import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GetUrlPath from "../shared/utilities/getUrlPath";

function StartPage() {

    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var image_url = base_url + "/splashdata"


    const navigate = useNavigate();

    function handleSubmit(e: { preventDefault: () => void }, base: string) {
        e.preventDefault();
        navigate("/lists/" + base);
    }

    return (<>
        <Header numberPage={0} show={false} />
        <Container maxWidth="lg">
            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "bezirk")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 90, width: 320, marginLeft: '1%' }}
                        image={image_url + "/bezirk/images/card.jpeg"}
                        alt="Bezirksmeisterschaften Mittelfranken 2025"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bezirksmeisterschaften 2025
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            28/29.06.2025
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div style={{
                height: 6
            }} />

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "bezirk")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 125, width: 320, marginLeft: '1%' }}
                        image={image_url + "/dmsm/images/fcn.jpeg"}
                        alt="28. Deutscher Mannschaftswettbewerb Schwimmen der Masters"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            28. Deutscher Mannschaftswettbewerb Schwimmen der Masters
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            08.11.2025
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div style={{
                height: 6
            }} />
        </Container>
        <Footer />
    </>)
}

export default StartPage;