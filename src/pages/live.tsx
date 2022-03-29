import React from 'react';
import '../styles/App.scss';
import { WsSocketState } from '../live//services/WsSocketState';
import { FrontendState } from '../live//state/FrontendState';

import { MessageFrontendComponent } from '../live/components/messages/MessageFrontendComponent';
import { BaseFrontendComponent } from '../live/components/BaseFrontendComponent';
import { eventHeat } from '../shared/types/EventHeat';
import { Container } from '@mui/material';

export default class live extends React.Component<{}, FrontendState> {

    mylane: string[];
    correctValueForLaneNull: number;
    evenHeat: eventHeat;

    window_width: number;
    window_height: number;
    //PIXEL_FROM_TOP
    window_top_pixel: number;


    constructor(props: {}) {
        super(props);
        this.onStartStop = this.onStartStop.bind(this);
        this.onEventHeatChange = this.onEventHeatChange.bind(this);
        this.onLaneChange = this.onLaneChange.bind(this);
        this.onDisplayModeChange = this.onDisplayModeChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onRunningTimeChange = this.onRunningTimeChange.bind(this);

        this.evenHeat = {
            name: "",
            heatnr: "",
            eventnr: ""
        }
        this.state = {
            startdelayms: 0,
            runningTime: "",
            racerunning: false,
            eventHeat: this.evenHeat,
            lanes: [],
            displayMode: "message",
            MessageText: "",
            MessageTime: "",
            VideoVersion: ""
        };
        this.mylane = [];
        this.correctValueForLaneNull = 0;
        this.window_width = process.env.REACT_APP_PIXEL_WIDTH !== undefined ? Number(process.env.REACT_APP_PIXEL_WIDTH) : 512
        this.window_height = process.env.REACT_APP_PIXEL_HEIGHT !== undefined ? Number(process.env.REACT_APP_PIXEL_HEIGHT) : 384
        this.window_top_pixel = process.env.REACT_APP_PIXEL_FROM_TOP !== undefined ? Number(process.env.REACT_APP_PIXEL_FROM_TOP) : 0

    }
    async onStartStop(startdelayms: number) {
        console.log("App: start or stop event (" + startdelayms + ")");
        // start without stop
        if (startdelayms !== -1) {
            if (this.state.racerunning) {
                this.setState({
                    startdelayms: 0,
                    racerunning: false
                });
            }
        }
        this.setState({
            startdelayms: startdelayms,
            racerunning: true
        });
    }

    onEventHeatChange(EventHeat: eventHeat) {
        this.setState({
            eventHeat: EventHeat
        });
    }


    onRunningTimeChange(RunningTime: string) {
        this.setState({
            runningTime: RunningTime
        });
    }

    onLaneChange(lane: number, LaneData: any) {
        if (lane === -1) {
            console.log("+++++ clear all")
            this.correctValueForLaneNull = 0;
            this.setState({
                lanes: this.mylane = []
            })
        } else {

            // eslint-disable-next-line
            if (lane == 0 && this.correctValueForLaneNull != 1) {
                console.log("+++++ 0")
                this.correctValueForLaneNull = 1;
            }
            var sizeLanes = this.mylane.length - this.correctValueForLaneNull

            if (lane > sizeLanes) {
                console.log(lane + ": new (" + this.correctValueForLaneNull + ")")
                this.mylane.push(LaneData)
            } else {
                this.mylane[lane - 1 + this.correctValueForLaneNull] = (LaneData)
                console.log(lane + ": lane change (" + this.correctValueForLaneNull + ")")
                // console.log(LaneData)
            }

            this.setState({
                lanes: this.mylane
            })
        }
    }

    onDisplayModeChange(displaymode: string) {
        console.log("change to " + displaymode)
        this.setState({
            displayMode: displaymode
        })
    }

    onMessageChange(message: any) {

        if (message.version !== undefined) {
            this.setState({
                VideoVersion: message.version
            })
        }

        if (message.value !== undefined) {
            this.setState({
                MessageText: message.value
            })
        }

        if (message.time !== undefined) {
            this.setState({
                MessageTime: message.time
            })
        }

    }


    render() {

        let webcontent = <p>starting</p>;

        if (this.state.displayMode === 'message' || this.state.displayMode === 'clock' || this.state.displayMode === 'video') {
            webcontent = <MessageFrontendComponent
                diplayMode={this.state.displayMode}
                MessageText={this.state.MessageText}
                MessageTime={this.state.MessageTime}
                VideoVersion={this.state.VideoVersion}
                displayFormat={"lcd"}
            />
        } else {
            webcontent = <BaseFrontendComponent
                startdelayms={this.state.startdelayms}
                EventHeat={this.state.eventHeat}
                lanes={this.state.lanes}
                displayMode={this.state.displayMode}
                runningTime={this.state.runningTime}
            />
        }

        return (
            <div>
                <Container maxWidth="md">
                    <WsSocketState onStartStop={this.onStartStop}
                        onEventHeatChange={this.onEventHeatChange}
                        onLaneChange={this.onLaneChange}
                        onDisplayModeChange={this.onDisplayModeChange}
                        onRunningTimeChange={this.onRunningTimeChange}
                        onMessageChange={this.onMessageChange} />
                    {webcontent}
                </Container>
            </div>
        );
    }

}