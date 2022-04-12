import React from "react";
import { StartStopComponent } from "./StartStopComponent";
import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { HeaderEventHeatComponent } from "../../shared/components/HeaderEventHeatComponent";
import { SingleLaneComponent } from "./SingleLaneComponent";

import classnames from 'classnames';
import { Grid } from "@mui/material";
import HeaderStyledLane from "../../shared/components/images/HeaderStyledLane";

export class BaseFrontendComponent extends React.Component<BaseFrontendInterface, {}> {

    render() {

        let heatheadertime = classnames("heatheadertime")

        return (
            <div>
                <HeaderEventHeatComponent
                    EventHeat={this.props.EventHeat}
                />
                <Grid container spacing={1}>
                    <Grid item xs={12} className={heatheadertime}>
                        <StartStopComponent
                            startdelayms={this.props.startdelayms}
                            EventHeat={this.props.EventHeat}
                            runningTime={this.props.runningTime}
                        />
                    </Grid>
                    <HeaderStyledLane />
                    {
                        this.props.lanes.map((lane, index) => (
                            <SingleLaneComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={this.props.displayMode}
                            />
                        ))
                    }
                </Grid>

            </div >
        )
    }
}
