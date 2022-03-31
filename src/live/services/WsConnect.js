import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client'
import Messages from './Messages';


/*
this.state = {
  WsConnected: false,
  HeatNumber: 0,
  EventNumber: 0,
  CompetitionName: 'new',
  DisplayMode: 'race'
}
*/
function WsConnect() {

   const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient('http://ubuntu.fritz.box',{
      path: '/ws/socket.io'
    });

    socket.on('connect', () => {
      console.log("WsSocketState: connected  socket-io");
    });

    socket.on()


    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default WsConnect;