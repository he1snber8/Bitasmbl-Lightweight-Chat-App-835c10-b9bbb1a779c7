import React,{useState} from 'react';
import socket from '../socket';
export default function MessageInput({room}){
 const[text,setText]=useState('');
 const send=e=>{
  e.preventDefault();
  if(!text.trim())return;
  socket.emit('chatMessage',{room,text});
  setText('');
 };
 return(
  <form onSubmit={send}>
   <input value={text} onChange={e=>setText(e.target.value)}/>
   <button type='submit'>Send</button>
  </form>);
}