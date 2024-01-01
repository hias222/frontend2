import {  Card, CardActionArea, CardContent, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function StartPage() {

    const navigate = useNavigate();

    function handleSubmit(e: { preventDefault: () => void }, base: string) {
        e.preventDefault();
        navigate("/lists/" + base);
    }

    return (<>
        <Header numberPage={0} />
        <Container maxWidth="lg">
            
            <Card sx={{ minWidth: 275 }}>
                <CardActionArea onClick={e => handleSubmit(e, "maerz")}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Nürnberg März Meeting
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            09/10.03.2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardActionArea onClick={(e) => handleSubmit(e, "masters")}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Bayerische Kurzbahnmeisterschaft der Masters 2024
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            16.03.2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            
        </Container>
        <Footer/>
    </>)
}

export default StartPage;