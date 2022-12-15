import { Button, Grid, Typography } from "@mui/material";

function History() {

    return (<div>
        <Grid>
            <Typography sx={{ fontWeight: 'bold' }} >
                11/12.12.2022 Nürnberger Lebkuchenschwimmen
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=12192022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                19.11.2022 44. Fürther Kinderschwimmen
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=11322022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} >
                25.06.2022 21. Amberger Kurfürstenpokal
            </Typography>
            <Typography color="text.primary">
                <Button variant="text" href="https://dsvdaten.dsv.de/File.aspx?F=WKResults&File=4092022.pdf" target={'_blank'}>Protokoll</Button>
            </Typography>
        </Grid>
    </div>)
}

export default History;