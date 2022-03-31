import React, { useEffect } from 'react';
import './Messages.css';

function Messages({ socket }) {

  useEffect(() => {
    console.log('hello')
    const messageListener = (message) => {
        console.log('new Message')
        console.log(message)
      
    };

    socket.on('connect', () => {
        console.log("WsSocketState: connected  socket-io");
      });
  
    socket.on('FromAPI', messageListener);

    return () => {
      socket.off('message', messageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      HEllo
    </div>
  );
}

export default Messages;