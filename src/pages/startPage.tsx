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
                {/* <CardActionArea onClick={e => handleSubmit(e, "maerz")}> */}
                <CardActionArea >
                    <div style={{
                        height: 6
                    }} />
{/*                     <CardMedia
                        component="img"
                        sx={{ height: 115, width: 115, marginLeft: '5%' }}
                        image={image_url + "/maerz/images/fcn.jpeg"}
                        alt="Nürnberger Märzmeeting"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ergebnisdienst Schwimmen
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Es sind aktuell keine Schwimm Meetings in Planung. Sobald es neue Informationen gibt, werden diese hier veröffentlicht.
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