const express=require('express');
const http=require('http');
const {Server}=require('socket.io');
const socketRooms=require('./socketRooms');
const app=express();
const server=http.createServer(app);
const io=new Server(server,{cors:{origin:'*'}});
socketRooms(io);
server.listen(4000);