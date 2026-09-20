import React from'react';import{Link}from'react-router-dom';export default function RoomCard({game}){return <div><b>{game.name}</b> <Link to={'/game/'+game.id}>Join</Link></div>}
