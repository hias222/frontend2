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
                <CardActionArea onClick={e => handleSubmit(e, "amberg")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 100, width: 90, marginLeft: '2%' }}
                        image={image_url + "/amberg/images/card.png"}
                        alt="Amberg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            23. Amberger Kurfürstenpokal
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            15/16.04.2024
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