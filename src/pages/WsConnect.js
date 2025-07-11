import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client'
import WkAnalyseData from '../live/services/WsAnalyseData';

import '../styles/App.scss';
import checkIncoming from '../shared/utilities/display/checkIncomingData';
import setLaneInfo from '../shared/utilities/display/setLaneInfo';
import setHeaderInfo from '../shared/utilities/display/setHeaderInfo';
import setRunningTime from '../shared/utilities/display/setRunningTime';

/*
this.state = {
  WsConnected: false,
  HeatNumber: 0,
  EventNumber: 0,
  CompetitionName: 'new',
  DisplayMode: 'race'
}
*/

// init

var newlanes = [];

function WsConnect() {

  var context_path = process.env.REACT_APP_BACKEND_CONTEX_PATH === undefined ? "/ws2/socket.io" : "/" + process.env.REACT_APP_BACKEND_CONTEX_PATH + "/socket.io"
  var get_backend_port = process.env.REACT_APP_BACKEND_PORT === undefined ? "4001" : process.env.REACT_APP_BACKEND_PORT
  var get_backend_url = process.env.REACT_APP_BACKEND_DIRECT === "true" ? window.location.protocol + "//" + window.location.hostname + ":" + window.location.port : process.env.REACT_APP_BACKEND_URL
  var backend_url = get_backend_url === undefined ? window.location.protocol + "//" + window.location.hostname + ":" + get_backend_port : get_backend_url

  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);

  const [lanes, setLanes] = useState([]);
  const [eventHeat, setEventHeat] = useState('');
  const [showTime, setShowTime] = useState('');
  
  function checkMessage(jsondata) {
    switch (checkIncoming(jsondata)) {
      case 'lane':
        //console.log(jsondata);
        newlanes = setLaneInfo(newlanes, jsondata)
        setLanes(newlanes)
        //console.log(newlanes);
        setMessage(jsondata);
        break;
      case 'header':
        setEventHeat(setHeaderInfo(jsondata))
        setMessage(jsondata);
        break;
      case 'time':
        setShowTime(setRunningTime(jsondata))
        break;
      default:
        console.log('WsConnect: checkMessage: unknown message type');
        console.log(jsondata)
    }

  }

  useEffect(() => {

    console.log(backend_url + ' Context ' + context_path)
    const newSocket = socketIOClient(backend_url, {
      path: context_path
    });

    const messageListener = (newmessage) => {
      var jsondata = JSON.parse(newmessage)
      // lokales object ganzen lauf füllen
      // https://react.dev/learn/updating-arrays-in-state
      //console.log('WsSocketState: message received ' + newmessage);
      //setMessage(jsondata)
      checkMessage(jsondata)
    };

    newSocket.on('FromAPI', messageListener);

    newSocket.on('connect', () => {
      setConnected(true)
      console.log('WsSocketState: connected ' + backend_url + context_path);
    });

    newSocket.on('disconnect', () => {
      setConnected(false)
      console.log('WsSocketState: disconnected ' + backend_url + context_path);
    });

    newSocket.io.on('error', (error) => {
      setConnected(false)
      console.log("WsSocketState: error socket-io " + backend_url + context_path);
      console.log(error)
    });


    return () => {
      newSocket.close()
      setConnected(false)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>

      <div className="chat-container">
        <WkAnalyseData message={message} connected={connected} lanes={lanes} header={eventHeat} runningtime={showTime}/>
      </div>

      {/*
      <button onClick={sayHello}>Log</button>
      <button onClick={connectWS}>Connect</button>
      <button onClick={disconnectWS}>DISConnect</button>
      */}
    </div>
  );
}

export default WsConnect;