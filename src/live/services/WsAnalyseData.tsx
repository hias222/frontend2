import React, { useEffect, useState } from 'react';

import getSwimStyles from '../utilities/getSwimStyles';
import { BaseFrontendComponent } from '../components/BaseFrontendComponent';
import DataMapper from './DataMapper';

/*
 this.state = {
      WsConnected: false,
      HeatNumber: 0,
      EventNumber: 0,
      CompetitionName: 'new',
      DisplayMode: 'race'
    }
    */

function WkAnalyseData({ socket }: { socket: any }) {

    const [HeatNumber, setHeatNumber] = useState('0');
    const [EventNumber, setEventNumber] = useState('0');
    const [DisplayMode, setDisplayMode] = useState('');
    const [CompetitionName, setCompetitionName] = useState('')
    const [JsonData, setJsonData] = useState('');


    useEffect(() => {


        function setHeaderInfo(jsondata: any) {

            if (jsondata.heat !== HeatNumber || jsondata.event !== EventNumber) {

                setDisplayMode('startlist')

                var swimstyle = (typeof (jsondata.name) !== "undefined" && jsondata.name)
                    ? jsondata.name : jsondata.distance + "m " + getSwimStyles(jsondata.swimstyle)

                /*
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
              */

                setHeatNumber(jsondata.heat)
                setEventNumber(jsondata.event)
                setJsonData(jsondata)
                setCompetitionName(jsondata.competition)

                console.log('----------> Heat' + jsondata.heat)

                /*
                this.setState({
                  EventNumber: jsondata.event,
                  HeatNumber: jsondata.heat,
                  CompetitionName: jsondata.competition
                })
                */
            } else {
                console.log("header no event or heat change ")
            }
            //setTimeout(this.activatePage, 500);
        }
        function checkIncoming(jsondata: any) {

            //console.log(jsondata)

            var messageType = jsondata.type
            //console.log("message type: " + messageType)
            switch (messageType) {
                case "start": {
                    //this.setStartMode(jsondata.diff)
                    console.log(jsondata.diff)
                    break;
                }
                case "stop": {
                    //this.props.onStartStop(-1)
                    console.log('-1')
                    break;
                }
                case "header": {
                    setHeaderInfo(jsondata);
                    break;
                }
                case "lane": {
                    //this.setLaneInfo(jsondata)
                    console.log('lane')
                    break;
                }
                case "clear": {
                    //state.lanes = []
                    //this.clearAll()
                    //this.setDisplayMode("clear")
                    console.log('clear')
                    break;
                }
                case "startlist": {
                    // ???
                    //this.setDisplayMode("startlist")
                    console.log('startlist')
                    break;
                }
                case "race": {
                    // ???
                    //this.setDisplayMode("race")
                    console.log('race')
                    break;
                }
                case "clock": {
                    // ???
                    //this.setDisplayMode("clock")
                    console.log('clock')
                    break;
                }
                case "time": {
                    //this.setRunningTime(jsondata)
                    console.log('time')
                    break;
                }
                case "message": {
                    //this.setDisplayMode("message")
                    //this.props.onMessageChange(jsondata)
                    console.log('message')
                    break;
                }
                case "lenex": {
                    //this.setDisplayMode("message")
                    //this.props.onMessageChange(jsondata)
                    console.log('lenex')
                    break;
                }
                case "video": {
                    // ???
                    //this.setDisplayMode("video")
                    //this.props.onMessageChange(jsondata)
                    console.log('video')
                    break;
                }
                default: {
                    console.log('default')
                }
            }
        }

        const messageListener = (message: any) => {
            var jsondata = JSON.parse(message)
            checkIncoming(jsondata)
        };

        socket.on('FromAPI', messageListener);

        return () => {
            socket.off('message', messageListener);
        };
    }, [socket, EventNumber, HeatNumber]);


    return (
        <div className="message-list">
            <DataMapper
                CompetitionName={CompetitionName}
                DisplayMode={DisplayMode}
                jsonData={JsonData}
                heatNumber={HeatNumber}
                eventNumber={EventNumber}
            />
        </div>
    );
}

export default WkAnalyseData;