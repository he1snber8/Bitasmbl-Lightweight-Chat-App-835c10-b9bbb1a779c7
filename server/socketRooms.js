const {randomId}=require('./utils/identity');
module.exports=function(io){
 io.on('connection',socket=>{
  const userId=randomId();
  socket.on('joinRoom',room=>{socket.join(room);});
  socket.on('chatMessage',({room,text})=>{
   io.to(room).emit('chatMessage',{room,text,userId,ts:Date.now()});
  });
  socket.on('disconnect',()=>{});
 });
};