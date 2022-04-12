import React from "react";
import classnames from 'classnames';
import { LaneData } from "../../interfaces/lanedatainterface";
import PoolIcon from '@mui/icons-material/Pool';
import LaneNumber from "./LaneNumber";
import { Grid, Hidden, Typography } from "@mui/material";
export default class LapStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    checkName() {
        let namelength = 20;
        let sizeName = this.props.swimmer.name.length;
        let sizeLastName = (this.props.swimmer.firstName !== undefined) ? this.props.swimmer.firstName.length : 0


        if (sizeName > (namelength - 2)) {
            console.log("short name")
            return this.props.swimmer.name.substr(0, (namelength - 2));
        }

        if (sizeName + sizeLastName > namelength) {
            return this.props.swimmer.name + " " + this.props.swimmer.firstName?.substr(0, 1) + ".";
        }

        let name = this.props.swimmer.name + " " + this.props.swimmer.firstName

        return name
    }

    render() {
        let laneeven = classnames('laneeven');
        let correctName = this.checkName();

        return <Grid container item xs={12} sm={12} md={12}>
            <Grid item xs={2} sm={1} md={1} className={laneeven}>
                <LaneNumber
                    laneNumber={this.props.lane} />
            </Grid>
            <Grid item xs={2} sm={1} md={1} className={laneeven}>
                <PoolIcon></PoolIcon>
            </Grid>
            <Grid container item xs={5} sm={8} md={8} className={laneeven} spacing={0}>
                <Grid item xs={12} sm={7} md={5}>
                    <Typography sx={{ margin: 0 }} color="text.primary" gutterBottom align="left">
                        {correctName}
                    </Typography>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={6} sm={5} md={2}>
                        <Typography sx={{ margin: 0 }} color="text.primary" gutterBottom align="center">
                            {this.props.swimmer.birthyear}
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={5}>
                    <Typography sx={{ margin: 0 }} color="text.primary" gutterBottom align="left">
                        {this.props.swimmer.clubname}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={3} sm={2} md={1} text-align={"center"} className={laneeven}>
                {this.props.finishtime}
            </Grid>
        </Grid>;

    }
}
