import React,{useEffect,useState}from'react';
import{api}from'../api/client.jsx';
import RoomCard from'../components/RoomCard.jsx';

export default function Lobby(){
  const[g,setG]=useState([
    {id:'sunny-land',name:'Sunny Land'}
  ]);

  useEffect(()=>{
    api('/games')
      .then(rooms=>{
        if(Array.isArray(rooms)&&rooms.length)setG(rooms);
      })
      .catch(()=>{});
  },[]);

  return <main>
    <h1>Lobby</h1>
    {g.map(x=><RoomCard key={x.id} game={x}/>)}
  </main>
}
