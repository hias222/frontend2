import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { common } from "./downloadsType";


function DownloadCommon(model: { commonData: [common]; }) {

    function getDownloadButton(downloadLink: string | undefined, linkText: string) {

        if (downloadLink === undefined) return <Button size="small" disabled={true}>{linkText}</Button>
        console.log(downloadLink)

        return <Button size="small" href={downloadLink} >{linkText}</Button>
    }


    return (
        <Grid container spacing={1}>
            {
                model.commonData.map((commonTag, index) => (
                    <Card sx={{ minWidth: 275 }} key={index}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {commonTag.name}
                            </Typography>
                            <Typography variant="body2">
                                Downloads
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {getDownloadButton(commonTag.link, 'Download')}
                        </CardActions>
                    </Card>
                ))
            }
        </Grid>
    )

}


export default DownloadCommon;

function commonData(commonData: any) {
    throw new Error("Function not implemented.");
}
