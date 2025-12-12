# Bitasmbl-Lightweight-Chat-App-835c10-b9bbb1a779c7

## Description
Build a web application that allows users to join anonymous chatrooms and exchange messages in real-time using WebSockets. The focus is on fast communication, simple interface, and responsive updates without requiring user registration.

## Tech Stack
- Express.js
- React
- Socket.IO

## Requirements
- Allow users to join chatrooms without authentication
- Send and receive messages in real-time using WebSockets
- Display messages with timestamps and user identifiers (anonymous)
- Handle multiple chatrooms simultaneously
- Gracefully handle disconnected users and reconnections

## Installation
bash
git clone https://github.com/he1snber8/Bitasmbl-Lightweight-Chat-App-835c10-b9bbb1a779c7.git
cd Bitasmbl-Lightweight-Chat-App-835c10-b9bbb1a779c7
npm install


## Usage
bash
npm start


## Implementation Steps
1. Initialize Express.js server and integrate Socket.IO.
2. Create endpoints or routes to serve the React app.
3. Implement Socket.IO rooms for multiple chatrooms.
4. Add message broadcasting with timestamps and anonymous identifiers.
5. Implement client-side React components for joining rooms and messaging.
6. Handle disconnections and reconnections with Socket.IO.

## API Endpoints
- GET / : Serve React application