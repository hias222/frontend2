import { Grid } from "@mui/material";
import React from "react";
import { eventHeat } from "../types/EventHeat";
import classnames from 'classnames';

interface HeaderEventHeatInterface {
    EventHeat: eventHeat;
}

export class HeaderEventHeatComponent extends React.Component<HeaderEventHeatInterface,{}>{

    render() {
        let heatname = this.props.EventHeat.name ?? this.props.EventHeat.swimstyle
        let heatevent = classnames('heatevent');
        return (
            <Grid container spacing={0} className={heatevent}>
                <Grid item xs={6}>Wettkampf: {this.props.EventHeat.eventnr}</Grid>
                <Grid item xs={6}>Lauf: {this.props.EventHeat.heatnr}</Grid>
                <Grid item xs={12}>{heatname}</Grid>
            </Grid>
        )
    }

}