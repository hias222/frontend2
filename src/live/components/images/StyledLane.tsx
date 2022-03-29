import React from "react";
import classnames from 'classnames';
import { LaneData } from "../../interfaces/lanedatainterface";

import LaneNumber from "./LaneNumber";
import { Grid } from "@mui/material";

export default class StyledLane extends React.Component<LaneData, {}> {

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

    formatEntryTime() {
        console.log("- " + this.props.entrytime)

        return this.props.entrytime;
    }

    render() {
        let laneeven = classnames('laneeven');
        let correctName = this.checkName();

        return <Grid container item xs={12} sm={12} md={12}>
            <Grid item xs={2} sm={1} md={1} className={laneeven}>
                <LaneNumber
                    laneNumber={this.props.lane} />
            </Grid>
            <Grid container item xs={10} sm={11} md={11} className={laneeven} spacing={0}>
                <Grid item xs={12} sm={7} md={5}>{correctName}</Grid>
                <Grid item xs={6} sm={5} md={2}>{this.props.swimmer.birthyear}</Grid>
                <Grid item xs={12} sm={12} md={5}>{this.props.swimmer.clubname}</Grid>
            </Grid>
        </Grid>
    }
}
