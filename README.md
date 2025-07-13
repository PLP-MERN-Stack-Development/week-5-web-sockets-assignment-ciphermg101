[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19912565&assignment_repo_type=AssignmentRepo)
# Real-Time Chat Application with Socket.io

This assignment focuses on building a real-time chat application using Socket.io, implementing bidirectional communication between clients and server.

## Assignment Overview

You will build a chat application with the following features:
1. Real-time messaging using Socket.io
2. User authentication and presence
3. Multiple chat rooms or private messaging
4. Real-time notifications
5. Advanced features like typing indicators and read receipts

## Project Structure

```
socketio-chat/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   ├── socket/         # Socket.io client setup
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # React entry point
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Client dependencies
├── server/                 # Node.js back-end
│   ├── server.js           # Main server file with Socket.io setup
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Features Implemented

✅ **Core Chat Functionality**
- Real-time messaging using Socket.io
- User authentication (username-based)
- Global chat room for all users
- Message display with sender name and timestamp
- Online/offline status for users

✅ **Advanced Chat Features**
- Private messaging between users
- Typing indicators when users are composing messages
- User list with online status
- System messages for user join/leave events

✅ **Real-Time Notifications**
- Real-time user join/leave notifications
- Typing indicators
- Connection status indicators

✅ **Performance and UX Optimization**
- Responsive design for desktop and mobile
- Auto-scroll to latest messages
- Reconnection logic for handling disconnections
- Modern UI with smooth animations

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies and start the application:

### Server Setup
```bash
cd server
npm install
npm run dev
```

### Client Setup
```bash
cd client
npm install
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`
5. Enter a username to join the chat room

## Files Included

- `Week5-Assignment.md`: Detailed assignment instructions
- Complete client and server implementation:
  - React frontend with modern UI
  - Socket.io server with all required features
  - Real-time chat functionality

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Basic understanding of React and Express

## How to Use

1. **Join Chat**: Enter your username and click "Join Chat"
2. **Send Messages**: Type in the message input and press Enter or click Send
3. **Private Messages**: Click on any user in the sidebar to start a private chat
4. **View Online Users**: See all connected users in the sidebar
5. **Typing Indicators**: See when other users are typing
6. **Leave Chat**: Click "Leave Chat" to disconnect

## Technical Implementation

- **Frontend**: React with Vite for fast development
- **Backend**: Node.js with Express and Socket.io
- **Real-time Communication**: Socket.io for bidirectional communication
- **Styling**: Modern CSS with responsive design
- **State Management**: React hooks for local state management

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. The implementation includes:

1. ✅ Complete client and server portions of the application
2. ✅ Core chat functionality with real-time messaging
3. ✅ Advanced features: private messaging, typing indicators, user status
4. ✅ Comprehensive documentation in README.md
5. ✅ Modern, responsive UI design
6. ✅ Proper error handling and connection management

## Resources

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Building a Chat Application with Socket.io](https://socket.io/get-started/chat) 