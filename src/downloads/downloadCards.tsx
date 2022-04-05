import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react"
type club = {
    name: string;
    code: string;
    nation?: string;
    region?: string;
    entriesfile?: string;
    certsfile?: string;
}

function DownloadCards() {

    const [clubData, setClubData] = useState<[club]>([{ 'name': '', 'code': '' }]);

    //getDownloadData()
    useEffect(() => {

        var download_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/frontend/downloads.json"

        function getDownloadData() {
            fetch(download_url)
                .then((result) => result.blob())
                .then((data) => data.text())
                .then(text => JSON.parse(text))
                .then(json => {
                    if (clubData.length !== json.length) setClubData(json)
                    console.log(clubData)
                })
                .catch(error => console.log(error))
        }

        getDownloadData()

        //return ( ) => setClubData('') ;
    }, [clubData]);

    function getDownloadButton(downloadLink: string | undefined, linkText: string){

        if (downloadLink === undefined) return <Button size="small" disabled={true}>{linkText}</Button>

        return <Button size="small" href={downloadLink} >Meldungen</Button>
    }

    return (
        <Grid container spacing={1}>
            {
                clubData.map((club, index) => (
                    <Card sx={{ minWidth: 275 }} key={index}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {club.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {club.code}
                            </Typography>
                            <Typography variant="body2">
                                Downloads
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


export default DownloadCards;