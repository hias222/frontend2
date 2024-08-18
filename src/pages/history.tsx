import { Button, Grid, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import GetUrlPath from "../shared/utilities/getUrlPath";

function History() {

    return (<>
        <Header numberPage={2} detail={GetUrlPath()} />
        <Grid>
            <Typography color="text.primary" sx={{ fontWeight: 'bold' }} >
                Kommende Wettkämpfe
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                46. Fürther Kinderschwimmen | 25m | 09.11.2024
            </Typography>

            <Typography color="text.primary" sx={{ fontWeight: 'bold' }} >
                <br></br>
                Vergangene Wettkämpfe
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                Mittelfränkische Meisterchaften | 50m | 06/07.07.2024
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKInfo&File=9392024.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                23. Amberger Kurfürstenpokal | 50m | 15/16.06.2024
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKInfo&File=2722024.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                März Meeting Nürnberg | 50m | 09/10.03.2024
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKInfo&File=3122024.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                Int Bayerische Masters Fürth | 25m | 16.03.2024
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKInfo&File=482024.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
                März Meeting Nürnberg | 50m | 09/10.03.2024
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=3122024.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }} >
                45. Kinderschwimmen Fürth | 25m | 11.11.2023
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=12422023.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                Bay. Kurzbahn Meisterschaften in Nürnberg | 25m | 14./15.10.2023
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=11892023.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                22. Amberger Kurfürstenpokal | 50m | 24/25.06.2022
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=312023.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                2. Nürnberger März-Meeting in Nürnberg | 50m | 04./05.03.2023
            </Typography>
            <Typography color="text.secondary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=2932023.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                Nürnberger Lebkuchenschwimmen | 50m | 11/12.12.2022
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=12192022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                44. Fürther Kinderschwimmen | 25m | 19.11.2022
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=11322022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                21. Amberger Kurfürstenpokal | 50m | 25.06.2022
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=4092022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
        </Grid>
        <Footer />
    </>)
}

export default History;