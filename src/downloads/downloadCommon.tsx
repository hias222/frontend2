import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { common } from "./downloadsType";


function DownloadCommon(model: { commonData: [common]; }) {

    function getDownloadButton(downloadLink: string | undefined, linkText: string) {

        if (downloadLink === undefined) return <Button size="small" disabled={true}>{linkText}</Button>
        //console.log(downloadLink)

        return <Button size="small" href={downloadLink} target={'_blank'}>{linkText}</Button>
    }


    return (
        <Grid container spacing={{ xs: 2, md: 3 }} >
            {
                model.commonData.map((commonTag, index) => (
                    <Grid item key={'100' + index}>
                        <Card sx={{ minWidth: 275, boxShadow:3}} key={index}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                                    {commonTag.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {getDownloadButton(commonTag.link, 'Download')}
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )

}


export default DownloadCommon;
