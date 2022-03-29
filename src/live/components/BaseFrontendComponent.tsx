import React from "react";
import { StartStopComponent } from "./StartStopComponent";
import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { HeaderEventHeatComponent } from "../../shared/components/HeaderEventHeatComponent";
import { SingleLaneComponent } from "./SingleLaneComponent";

import classnames from 'classnames';
import { Grid } from "@mui/material";

export class BaseFrontendComponent extends React.Component<BaseFrontendInterface, {}> {

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
            //console.log("update " + JSON.stringify(this.props.lanes))
        }
    }

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
