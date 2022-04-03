import { useEffect, useState } from 'react';
// import getSwimStyles from '../utilities/getSwimStyles';
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
    const [startdelayms, setStartdelayms] = useState<number>(0);
    const [runningTime, setRunningTime] = useState('0');

    function setHeaderInfo(jsondata: any) {

        if (jsondata.heat !== HeatNumber || jsondata.event !== EventNumber) {

            setDisplayMode('startlist')

            /*

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
       */

            setHeatNumber(jsondata.heat)
            setEventNumber(jsondata.event)
            setJsonData(jsondata)
            setCompetitionName(jsondata.competition)

            console.log('WSAnaylseData ------> Heat' + jsondata.heat)

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

    function setLaneInfo(jsondata: any) {
        //locklanes = true;
        if (jsondata.place === '0') {
            var laptime = "{ \"laptime\": \"" + Date.now() + "\",\"lap\": \"true\" }"
            var newjsondata = { ...jsondata, ...JSON.parse(laptime) }
            //activelapdata = true;
            //this.props.onLaneChange(jsondata.lane, newjsondata)
            setJsonData(newjsondata)
            if (DisplayMode !== 'race') {
                setDisplayMode('race')
            }
        } else {
            var laptime2 = "{ \"lap\": \"false\" }"
            var newjsondata2 = { ...jsondata, ...JSON.parse(laptime2) }
            //this.props.onLaneChange(jsondata.lane, newjsondata2)
            setJsonData(newjsondata2)

            if (jsondata.finishtime === "undefined" || !jsondata.finishtime) {
                if (DisplayMode !== 'startlist' && DisplayMode !== 'race') {
                    setDisplayMode('startlist')
                }
            } else {
                if (DisplayMode !== 'race') {
                    setDisplayMode('race')
                }
            }
        }
    }

    function setStartMode(startdelay: number) {
        var calcstartdelay = typeof (startdelay) != 'undefined' ? startdelay : 100
        console.log('startdelay ' + calcstartdelay)
        //if (this.state.DisplayMode === 'message' || this.state.DisplayMode === 'clock' || this.state.DisplayMode === 'video') {
        setDisplayMode('startlist')
        //}
        setStartdelayms(calcstartdelay)
    }

    function setRunningTimeString(time: any) {
        if (time.value === "undefined" || !time.value) {
            setRunningTime("0")
        } else {
            setRunningTime(time.value);
        }
    }

    function checkIncoming(jsondata: any) {
        //console.log(jsondata)
        var messageType = jsondata.type
        //console.log("message type: " + messageType)
        switch (messageType) {
            case "start": {
                setStartMode(jsondata.diff)
                break;
            }
            case "stop": {
                console.log('stop')
                setStartdelayms(-1);
                break;
            }
            case "header": {
                setHeaderInfo(jsondata);
                break;
            }
            case "lane": {
                setLaneInfo(jsondata)
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
                if (DisplayMode !== 'startlist') {
                    setDisplayMode("startlist")
                    console.log('startlist')
                }
                break;
            }
            case "race": {
                // ???
                setDisplayMode("race")
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
                setRunningTimeString(jsondata)
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


    useEffect(() => {

        const messageListener = (message: any) => {
            var jsondata = JSON.parse(message)
            checkIncoming(jsondata)
        };

        socket.on('FromAPI', messageListener);

        return () => {
            socket.off('message', messageListener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, EventNumber, HeatNumber]);


    return (
        <div className="message-list">
            <DataMapper
                CompetitionName={CompetitionName}
                DisplayMode={DisplayMode}
                jsonData={JsonData}
                heatNumber={HeatNumber}
                eventNumber={EventNumber}
                startdelayms={startdelayms}
                runningtime={runningTime}
            />
        </div>
    );
}

export default WkAnalyseData;