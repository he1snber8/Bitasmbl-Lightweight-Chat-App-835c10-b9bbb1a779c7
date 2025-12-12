const express=require('express');
const http=require('http');
const {Server}=require('socket.io');
const socketConfig=require('./socket');
const app=express();
const server=http.createServer(app);
const io=new Server(server,{cors:{origin:'*'}});
socketConfig(io);
module.exports={app,server};