import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { club } from "./downloadsType";


function DownloadClub(model: { clubData: [club]; }) {

    function getDownloadButton(downloadLink: string | undefined, linkText: string) {

        if (downloadLink === undefined) return <Button size="small" disabled={true}>{linkText}</Button>
        //console.log(downloadLink)

        return <Button size="small" href={downloadLink} >{linkText}</Button>
    }

    return (
        <Grid container spacing={1}>
            {
                model.clubData.map((club, index) => (
                    <Card sx={{ minWidth: 275 }} key={index}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                                {club.name}
                            </Typography>
                            <Typography sx={{ mb: 1.3 }} color="text.secondary">
                                {club.code}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {getDownloadButton(club.entriesfile, 'Meldungen')}
                            {getDownloadButton(club.certsfile, 'Urkunden')}
                        </CardActions>
                    </Card>
                ))
            }
        </Grid>
    )

}


export default DownloadClub;