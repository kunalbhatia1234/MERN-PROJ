// import React from 'react'

import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"
import { useContext, useRef } from "react"
import { PlayerContext } from "./context/PlayerContext"


const App = () => {
  const {audioRef, track} = useContext(PlayerContext);
  const seekBg = useRef();
  const seekBar = useRef();

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App
