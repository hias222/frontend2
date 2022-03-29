import React from "react";
import { WsSocketPropsInterface } from "../interfaces/WsSocketPropsInterface";

import socketIOClient from "socket.io-client";
import { WsSocketPropsState } from "../state/WsSocketPropsState";

import UnpluggedIcon from '@mui/icons-material/WifiOff';
import PluggedIcon from '@mui/icons-material/Wifi';

import getSwimStyles from '../utilities/getSwimStyles';

import classnames from 'classnames';
import { Grid } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
//import { purple,blue } from '@material-ui/core/colors';

export class WsSocketState extends React.Component<WsSocketPropsInterface, WsSocketPropsState>
{
  backend_url: string;
  context_path: string;

  constructor(props: WsSocketPropsInterface) {
    super(props);
    this.context_path = process.env.REACT_APP_BACKEND_CONTEX_PATH === undefined ? "/socket.io" : "/" + process.env.REACT_APP_BACKEND_CONTEX_PATH + "/socket.io"
    var get_backend_port = process.env.REACT_APP_BACKEND_PORT === undefined ? "4001" : process.env.REACT_APP_BACKEND_PORT
    var get_backend_url = process.env.REACT_APP_BACKEND_DIRECT === "true" ? window.location.protocol + "//" + window.location.hostname + ":" + window.location.port : process.env.REACT_APP_BACKEND_URL
    this.backend_url = get_backend_url === undefined ? window.location.protocol + "//" + window.location.hostname + ":" + get_backend_port : get_backend_url
    this.state = {
      WsConnected: false,
      HeatNumber: 0,
      EventNumber: 0,
      CompetitionName: 'new',
      DisplayMode: 'race'
    }
  }

  componentDidMount() {

    console.log("WsSocketState: connect to " + this.backend_url + "/socket-io");

    const socket = socketIOClient(this.backend_url,
      {
        path: this.context_path
      });

    socket.on('connect', () => {
      console.log("WsSocketState: connected " + this.backend_url + " socket-io");
      this.setState({
        WsConnected: true
      })
    });

    socket.on('disconnect', () => {
      console.log("WsSocketState: disconnected " + this.backend_url + " socket-io");
      this.setState({
        WsConnected: false
      })
    });

    socket.on("FromAPI", (data: any) => {
      var jsondata = JSON.parse(data)
      this.checkIncoming(jsondata);
    });
  }


  checkIncoming(jsondata: any) {
    var messageType = jsondata.type
    switch (messageType) {
      case "start": {
        this.setStartMode(jsondata.diff)
        break;
      }
      case "stop": {
        this.props.onStartStop(-1)
        break;
      }
      case "header": {
        this.setHeaderInfo(jsondata);
        break;
      }
      case "lane": {
        this.setLaneInfo(jsondata)
        break;
      }
      case "clear": {
        //state.lanes = []
        this.clearAll()
        this.setDisplayMode("clear")
        break;
      }
      case "startlist": {
        // ???
        this.setDisplayMode("startlist")
        break;
      }
      case "race": {
        // ???
        this.setDisplayMode("race")
        break;
      }
      case "clock": {
        // ???
        this.setDisplayMode("clock")
        break;
      }
      case "time": {
        this.setRunningTime(jsondata)
        break;
      }
      case "message": {
        this.setDisplayMode("message")
        this.props.onMessageChange(jsondata)
        break;
      }
      case "lenex": {
        this.setDisplayMode("message")
        this.props.onMessageChange(jsondata)
        break;
      }
      case "video": {
        // ???
        this.setDisplayMode("video")
        this.props.onMessageChange(jsondata)
        break;
      }

    }
  }

  setHeaderInfo(jsondata: any) {

    if (jsondata.heat !== this.state.HeatNumber || jsondata.event !== this.state.EventNumber) {

      this.setDisplayMode('startlist')

      var swimstyle = (typeof (jsondata.name) !== "undefined" && jsondata.name)
        ? jsondata.name : jsondata.distance + "m " + getSwimStyles(jsondata.swimstyle)

      this.props.onEventHeatChange({
        name: swimstyle,
        eventnr: jsondata.event,
        heatnr: jsondata.heat,
        competition: jsondata.competition,
        distance: jsondata.distance,
        gender: jsondata.gender,
        relaycount: jsondata.relaycount,
        round: jsondata.round,
        swimstyle: jsondata.swimstyle
      })

      this.setState({
        EventNumber: jsondata.event,
        HeatNumber: jsondata.heat,
        CompetitionName: jsondata.competition
      })
    } else {
      console.log("header no event or heat change ")
    }
    //setTimeout(this.activatePage, 500);
  }

  setLaneInfo(jsondata: any) {
    //locklanes = true;
    if (jsondata.place === '0') {
      var laptime = "{ \"laptime\": \"" + Date.now() + "\",\"lap\": \"true\" }"
      var newjsondata = { ...jsondata, ...JSON.parse(laptime) }
      //activelapdata = true;
      this.props.onLaneChange(jsondata.lane, newjsondata)
      if (this.state.DisplayMode !== 'race') {
        this.setDisplayMode('race')
      }
    } else {
      var laptime2 = "{ \"lap\": \"false\" }"
      var newjsondata2 = { ...jsondata, ...JSON.parse(laptime2) }
      this.props.onLaneChange(jsondata.lane, newjsondata2)

      if (jsondata.finishtime === "undefined" || !jsondata.finishtime) {
        if (this.state.DisplayMode !== 'startlist' && this.state.DisplayMode !== 'race') {
          this.setDisplayMode('startlist')
        }
      } else {
        if (this.state.DisplayMode !== 'race') {
          this.setDisplayMode('race')
        }
      }
    }
  }

  setRunningTime(time: any) {
    if (time.value === "undefined" || !time.value) {
      this.props.onRunningTimeChange("0");
    } else {
      this.props.onRunningTimeChange(time.value);
    }
  }

  setDisplayMode(mode: string) {
    this.setState({
      DisplayMode: mode
    })
    this.props.onDisplayModeChange(mode)
  }

  setStartMode(startdelay: number) {
    var calcstartdelay = typeof (startdelay) != 'undefined' ? startdelay : 100
    //if (this.state.DisplayMode === 'message' || this.state.DisplayMode === 'clock' || this.state.DisplayMode === 'video') {
    this.setDisplayMode('startlist')
    //}
    this.props.onStartStop(calcstartdelay)
  }

  clearAll() {
    this.props.onLaneChange(-1, null)
  }

  render() {
    let heatheadertime = classnames("heatheadertime")
    var webcontent;
    if (!this.state.WsConnected) {
      webcontent = <Grid container>
        <Grid item xs={12} className={heatheadertime}><UnpluggedIcon style={{ color: purple[500] }}></UnpluggedIcon> </Grid>
        <Grid item xs={12}> keine Verbindung zur Zeitmessung</Grid>
      </Grid>;
    } else {
      webcontent = webcontent = <Grid container>
      <Grid item xs={12} className={heatheadertime}><PluggedIcon style={{ color: blue[500] }}/> </Grid>
    </Grid>;
    }
    return (
      <div>
        {webcontent}
      </div>
    );
  }
}
