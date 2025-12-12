module.exports=function(io){
 io.on('connection',socket=>{
  socket.on('joinRoom',room=>{socket.join(room);});
  socket.on('chatMessage',data=>{
   io.to(data.room).emit('chatMessage',data);
  });
 });
};