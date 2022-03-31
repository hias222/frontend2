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

  function sayHello() {
    console.log(socket)
  }

  function connectWS() {
    socket.connect()
    console.log('connect')
  }

  function disconnectWS() {
    socket.disconnect()
    console.log('disconnect')
  }

   const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient('http://localhost:4001',{
      path: '/ws/socket.io'
    });

    newSocket.io.on('connect', () => {
      console.log("WsSocketState: connected http://localhost:4001 socket-io");
    });

    newSocket.io.on('error', (error) => {
      console.log("WsSocketState: error  socket-io");
      console.log(error)
    });
    
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
      <button onClick={sayHello}>Log</button>
      <button onClick={connectWS}>Connect</button>
      <button onClick={disconnectWS}>DISConnect</button>
    </div>
  );
}

export default WsConnect;