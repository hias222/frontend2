import React from "react";
import { Grid, Hidden, Typography } from "@mui/material";

export default class HeaderStyledLane extends React.Component<{}, {}> {

    render() {

        return <Grid container item xs={12} sm={12} md={12}>
            <Grid item xs={3} sm={2} md={2}>
                <Typography sx={{ mb: 0.3 }} color="text.primary" gutterBottom align="left">
                    Bahn/Platz
                </Typography>
            </Grid>
            <Grid container item xs={6} sm={8} md={8} spacing={0}>
                <Grid item xs={12} sm={7} md={3}>
                    <Typography sx={{ mb: 1.0 }} color="text.primary" gutterBottom align="left">
                        Name
                    </Typography>
                </Grid>
                <Hidden xsDown>
                    <Grid item sm={5} md={2}>
                        <Typography sx={{ mb: 1.0 }} color="text.primary" gutterBottom align="center">
                            Jahrgang
                        </Typography>
                    </Grid>

                </Hidden>
                <Grid item xs={12} sm={12} md={5}>
                    <Typography sx={{ mb: 1.0 }} color="text.primary" gutterBottom align="left">
                        Verein
                    </Typography>
                </Grid>
                <Hidden smDown>
                    <Grid item md={2}>
                        <Typography sx={{ mb: 0.5 }} color="text.primary" gutterBottom align="left">
                            Meldezeit
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item xs={3} sm={2} md={2} text-align={"right"} >
                <b>Zeit</b>
            </Grid>
        </Grid >;

    }
}
