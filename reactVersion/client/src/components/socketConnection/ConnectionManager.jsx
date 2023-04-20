import React from 'react'
import { socket } from '../../socket';
import {Button } from '../og/styles/ButtonStyle';

const ConnectionManager = () => {

    const connect = () => {
        socket.connect();
        console.log(`connect button clicked`)
        
    }

    const disconnect = () => {
        socket.disconnect();
        console.log("disconnect button clicked")
    }
  
  return (
    <>
        <Button onClick={connect}> Connect </Button>
        <Button onClick={disconnect}> Disconnect </Button>
    </>
  )
}

export default ConnectionManager