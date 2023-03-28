import React from 'react'
import { socket } from '../../socket';

const ConnectionManager = () => {
    const connect = () => {
        socket.connect();
        console.log("connect button clicked")
    }

    const disconnect = () => {
        socket.disconnect();
        console.log("disconnect button clicked")
    }

  return (
    <>
        <button onClick={connect}> Connect </button>
        <button onClick={disconnect}> Disconnect </button>
    </>
  )
}

export default ConnectionManager