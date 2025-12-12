import React,{useState,useEffect} from 'react';
import socket from '../socket';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
export default function ChatRoom(){
 const[room,setRoom]=useState('general');
 const[msgs,setMsgs]=useState([]);
 useEffect(()=>{
  socket.emit('joinRoom',room);
  socket.on('chatMessage',m=>setMsgs(x=>[...x,m]));
  return()=>socket.off('chatMessage');
 },[room]);
 return(
  <div>
   <input value={room} onChange={e=>setRoom(e.target.value)}/>
   <MessageList messages={msgs}/>
   <MessageInput room={room}/>
  </div>);
}