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
        <Header numberPage={0} />
        <Container maxWidth="lg">

            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 88 , width:90, marginLeft: '30%' }}
                    image={ image_url + "/maerz/images/card.jpg"}
                    alt="FCN"
                />
                <CardActionArea onClick={e => handleSubmit(e, "maerz")}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nürnberg März Meeting
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            09/10.03.2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ minWidth: 275 }} color="text.secondary" >
                <CardActionArea onClick={(e) => handleSubmit(e, "masters")}>
                <CardMedia
                    component="img"
                    sx={{ height: 88 , width: 140, marginLeft: '30%'  }}
                    image={ image_url + "/masters/images/card.jpg"}
                    alt="BSV"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bayerische Kurzbahnmeisterschaft der Masters 2024
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            16.03.2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Container>
        <Footer />
    </>)
}

export default StartPage;