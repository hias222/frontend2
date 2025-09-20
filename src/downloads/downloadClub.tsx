import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { club } from "./downloadsType";
import getRandomString from "../shared/utilities/getRandomString";

function DownloadClub(model: { clubData: [club]; }) {

    var no_cache_string = getRandomString(10)

    function getDownloadButton(downloadLink: string | undefined, linkText: string) {

        if (downloadLink === undefined) return <Button size="small" disabled={true}>{linkText}</Button>
        //console.log(downloadLink)

        return <Button size="small" href={"../../" + downloadLink + '?nc=' + no_cache_string} target={'_blank'}>{linkText}</Button>
    }

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} >
            {
                model.clubData.map((club, index) => (
                    <Grid item key={'500' + index}>
                        <Card sx={{ minWidth: 275, boxShadow: 3 }} key={index}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>
                                    {club.name}
                                </Typography>
                                <Typography sx={{ mb: 1.3 }} color="text.secondary">
                                    {club.code}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* {getDownloadButton(club.entriesfile, 'Meldungen')} */}
                                {getDownloadButton(club.certsfile, 'Urkunden')}
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )

}


export default DownloadClub;