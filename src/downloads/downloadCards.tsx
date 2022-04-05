import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import DownloadClub from "./downloadClub";
import DownloadCommon from "./downloadCommon";
import { downloadData } from "./downloadsType";


function DownloadCards() {

    var emptyData: downloadData = {
        common: [{ name: '' }],
        clubs: [{ 'name': '', 'code': '' }]
    }

    const [clubData, setClubData] = useState<downloadData>(emptyData);

    //getDownloadData()
    useEffect(() => {

        var download_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/frontend/downloads.json"

        function getDownloadData() {
            fetch(download_url)
                .then((result) => result.blob())
                .then((data) => data.text())
                .then(text => JSON.parse(text))
                .then(json => {
                    if (clubData.clubs.length !== json.clubs.length) setClubData(json)
                    console.log(clubData)
                })
                .catch(error => console.log(error))
        }

        getDownloadData()

        //return ( ) => setClubData('') ;
    }, [clubData]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography  sx={{ mb: 1.5 }} color="text.primary" gutterBottom >Allgemein</Typography>
            </Grid>
            <Grid>
                <DownloadCommon commonData={clubData.common}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>Vereine</Typography>
            </Grid>
            <Grid>
                <DownloadClub clubData={clubData.clubs} />
            </Grid>
        </Grid>
    )

}


export default DownloadCards;