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
        navigate("/results/" + base);
    }

    return (<>
        <Header numberPage={0} show={false} />
        <Container maxWidth="lg">

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "dmsm")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 115, width: 320, marginLeft: '1%' }}
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

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "kinder")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 90, width: 320, marginLeft: '1%' }}
                        image={image_url + "/kinder/images/card.png"}
                        alt="Kinderschwimmen 2025"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kinderschwimmen 2025
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            22.11.2025
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