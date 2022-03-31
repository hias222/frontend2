import React, { useEffect, useState } from 'react';
import './Messages.css';

function Messages({ socket }) {

  const [message, setMessage] = useState(' - - ');

  useEffect(() => {
    
    const messageListener = (message) => {
        console.log('new Message')
        setMessage(message)

    };

    socket.on('FromAPI', messageListener);

    return () => {
      socket.off('message', messageListener);
    };
  }, [socket]);

  return (
    <div className="message-list">
      {message}
    </div>
  );
}

export default Messages;