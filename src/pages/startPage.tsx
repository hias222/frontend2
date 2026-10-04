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
        navigate("/downloads/" + base);
    }

    return (<>
        <Header numberPage={0} show={false} />
        <Container maxWidth="lg">

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "lange")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 104, width: 100, marginLeft: '5%' }}
                        image={image_url + "/lange/images/fcn.jpg"}
                        alt="Nürnberger Lange Strecken"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nürnberger Lange Strecken
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            07./08. November 2026
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div style={{
                height: 6
            }} />

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "dmsj")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 100, width: 299, marginLeft: '5%' }}
                        image={image_url + "/dmsj/images/fcn_bsv.jpg"}
                        alt="DMSJ - 64. Landesentscheid"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            DMSJ - 64. Landesentscheid „Bayern“ 2026 in Nürnberg
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            21./22. November 2026
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div style={{
                height: 6
            }} />

            <Card sx={{ minWidth: 275, boxShadow: 6 }}  >
                <CardActionArea onClick={e => handleSubmit(e, "maerz")}>
                    <div style={{
                        height: 6
                    }} />
                    <CardMedia
                        component="img"
                        sx={{ height: 104, width: 100, marginLeft: '5%' }}
                        image={image_url + "/maerz/images/fcn.jpeg"}
                        alt="März Meeting"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            März Meeting in Nürnberg
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            06./07. März 2027
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