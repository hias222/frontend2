import React from "react";
import { BaseResultInterface } from "./interfaces/BaseResultInterface";
import { ResultState } from "./state/ResultState";
import { FinishLaneComponent } from "./components/FinishLaneComponent";
import { HeaderEventHeatComponent } from "../shared/components/HeaderEventHeatComponent";


import classnames from 'classnames';

import BackIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ForwardIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';

import getSwimSytle from "../shared/utilities/getSwimStyles"
import { Grid, IconButton, LinearProgress } from "@mui/material";
import { blue } from "@mui/material/colors";



export class BaseHeatsComponent extends React.Component<BaseResultInterface, ResultState> {

    backend_url: string;
    constructor(props: BaseResultInterface) {
        super(props);
        this.loadBackendData = this.loadBackendData.bind(this)
        this.startLoadingdata = this.startLoadingdata.bind(this)    
        var get_backend_port = process.env.REACT_APP_API_DB_PORT === undefined ? "3000" : process.env.REACT_APP_API_DB_PORT
        var get_backend_url = process.env.REACT_APP_API_DB_DIRECT === "true" ? window.location.protocol + "//" + window.location.hostname + ":" + window.location.port  : process.env.REACT_APP_WS_API_DB_URL
        this.backend_url = get_backend_url === undefined ? window.location.protocol + "//" + window.location.hostname + ":" + get_backend_port : get_backend_url
        this.state = {
            loading: true,
            EventHeat: {
                name: '',
                eventnr: '0',
                heatnr: '0'
            },
            id: '0',
            lastid: '0',
            lanes: []
        }
    }

    startLoadingdata() {
        var eventname = this.state.EventHeat.name;
        return new Promise((resolve, reject) => {
            this.setState({
                loading: true,
                lanes: [],
                EventHeat: {
                    name: eventname,
                    heatnr: '',
                    eventnr: '',
                },
            }, () => {
                return resolve('ready')
            })
        })
    }

    loadBackendData(loadid: string | undefined) {
        let apiurl: string;

        if (loadid === undefined) {
            apiurl = this.backend_url + "/datahub/heat/all"
        } else {
            apiurl = this.backend_url + "/datahub/heat/search/" + loadid
        }

        console.log("DataState: connect to " + apiurl);

        this.startLoadingdata()
            .then(() =>
                fetch(apiurl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    cache: 'no-cache'
                }))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.lanes === null || data.lanes === undefined) {
                    data.lanes = []
                    console.log('empty lanes')
                }
                var eventname = data.name !== null ? data.name : data.distance + "m " + getSwimSytle(data.swimstyle);
                this.setState({
                    loading: false,
                    EventHeat: {
                        name: eventname,
                        heatnr: data.heat,
                        eventnr: data.event,
                    },
                    id: data.heatid,
                    lanes: data.lanes,
                    lastid: data.lastid,
                    nextid: data.nextid,
                    runtime: data.creation_date
                })
            })

    }

    componentDidMount() {
        this.loadBackendData(this.props.id);
    }

    render() {

        //let baseurl = '/heats'
        let heatheadertime = classnames("heatheadertime")
        // let backurl = '/heats/' + this.state.lastid
        // let forwardurl = this.state.nextid !== undefined && this.state.nextid !== null ? '/heats/' + this.state.nextid : baseurl

        var forwardisabled = this.state.nextid !== undefined && this.state.nextid !== null ? false : true
        var d = this.state.runtime !== undefined ? new Date(this.state.runtime) : Date.now()

        const hour = new Intl.DateTimeFormat('de', { hour: '2-digit', minute: 'numeric', second: 'numeric' }).format(d)

        // {d.toLocaleString()}
        return (
            <div>

                <Grid container>
                    <Grid item xs={1} sm={3} md={4}> </Grid>
                    <Grid item xs={3} sm={2} md={1}>
                        <IconButton aria-label="back"
                            onClick={() => { this.loadBackendData(this.state.lastid) }}
                        >
                            <BackIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1}>
                        <IconButton aria-label="base"
                            onClick={() => { this.loadBackendData(undefined) }}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1}>
                        <IconButton disabled={forwardisabled}
                            onClick={() => { this.loadBackendData(this.state.nextid) }}
                            aria-label="forward" >
                            <ForwardIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={2} sm={3} md={5}> </Grid>
                </Grid>

                <Grid container >
                    <HeaderEventHeatComponent
                        EventHeat={this.state.EventHeat}
                    />
                </Grid>
                <Grid className={heatheadertime} >{hour}</Grid>
                {this.state.loading ? <LinearProgress style={{ backgroundColor: blue[500] }} /> : <div></div>}
                <Grid container spacing={1}>
                    {
                        this.state.lanes.map((lane, index) => (
                            <FinishLaneComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={'result'}
                            />
                        ))
                    }

                </Grid>
            </div >
        )
    }
}
