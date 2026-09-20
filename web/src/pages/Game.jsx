import React,{useEffect,useState}from'react';
import{useParams}from'react-router-dom';
import{io}from'socket.io-client';
import Chat from '../components/Chat.jsx';

export default function Game(){
  const{id}=useParams();
  const[connected,setConnected]=useState(false);

  useEffect(()=>{
    const s=io(import.meta.env.VITE_SERVER_URL||'http://localhost:3000',{
      auth:{token:localStorage.access}
    });
    s.on('connect',()=>setConnected(true));
    s.on('disconnect',()=>setConnected(false));
    s.emit('join_room',id);
    return()=>s.disconnect();
  },[id]);

  return <div className="game-page">
    <div className="game-toolbar">
      <strong>SunnyLand</strong>
      <span>{connected?'ONLINE':'CONNECTING...'}</span>
    </div>
    <div className="game-frame-wrap">
      <iframe
        title="SunnyLand Phaser Game"
        src="/sunny-land/index.html"
        className="game-frame"
        allow="autoplay"
      />
    </div>
    <div className="game-controls">
      <span>Keyboard: ← → move · SPACE jump</span>
      <span>Room: {id}</span>
    </div>
    <Chat room={id}/>
  </div>
}
