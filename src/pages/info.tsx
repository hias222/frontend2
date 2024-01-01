import { Button, Grid, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import GetUrlPath from "../shared/utilities/getUrlPath";

function Info() {

    var impressum_data = process.env.REACT_APP_SITE_IMPRESSUM === undefined ? "Impressum" : process.env.REACT_APP_SITE_IMPRESSUM
    var impressum_contact = process.env.REACT_APP_SITE_CONTACT === undefined ? "Contact" : process.env.REACT_APP_SITE_CONTACT
    var impressum_response = process.env.REACT_APP_SITE_RESPONSIBILITY === undefined ? "Response" : process.env.REACT_APP_SITE_RESPONSIBILITY
    
    return (<>
        <Header numberPage={1} detail={GetUrlPath()} />
        <Grid>
            <Typography sx={{ fontWeight: 'bold' }} >
                Impressum:
            </Typography>
            <Typography color="text.primary">
            {impressum_data}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                Kontakt:
            </Typography>
            <Typography color="text.primary">
            {impressum_contact}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:
            </Typography>
            <Typography color="text.primary">
            {impressum_response}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                In Zusammenarbeit mit:
            </Typography>
            <Typography color="text.primary"><Button variant="text" href="http://www.sgfuerth.de" target={'_blank'}>www.sgfuerth.de</Button></Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                Haftungsausschluss
            </Typography>
            <Typography color="text.primary" >
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Die Links auf unserer Internetseite wurden mit größter Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für ihre Fehlerfreiheit. Die Auswahl der Links erhebt darüber hinaus keinen Anspruch auf Vollständigkeit und Repräsentanz. Die Nutzung der Links erfolgt auf eigene Gefahr. Falls aus der Nutzung der Links irgendwelche Schäden entstehen, übernehmen wir ausdrücklich keine Haftung. Ebenfalls übernehmen wir ausdrücklich keine Haftung für die Richtigkeit und rechtliche Zulässigkeit der Links.
                Bitte informieren Sie uns wenn Sie einen interessanten Link vermissen. Bitte informieren Sie uns auch, wenn Sie inhaltliche oder rechtliche Bedenken gegen den Inhalt eines Links haben
            </Typography>
            <Footer></Footer>
        </Grid>
    </>)
}

export default Info;