import React from 'react';
export default function MessageList({messages}){
 return(
  <ul>
   {messages.map((m,i)=>(
    <li key={i}>
     [{new Date(m.ts).toLocaleTimeString()}] {m.userId}: {m.text}
    </li>))}
  </ul>);
}