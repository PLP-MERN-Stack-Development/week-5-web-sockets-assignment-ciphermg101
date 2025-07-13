import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from '../socket/socket.js';
import './ChatRoom.css';

const ChatRoom = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPrivateChat, setIsPrivateChat] = useState(false);
  const messagesEndRef = useRef(null);

  const {
    socket,
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    sendPrivateMessage,
    setTyping,
  } = useSocket();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleJoin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      connect(username);
      setIsJoined(true);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      if (isPrivateChat && selectedUser) {
        sendPrivateMessage(selectedUser.id, message);
      } else {
        sendMessage(message);
      }
      setMessage('');
      setTyping(false);
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setTyping(e.target.value.length > 0);
  };

  const startPrivateChat = (user) => {
    setSelectedUser(user);
    setIsPrivateChat(true);
  };

  const leavePrivateChat = () => {
    setSelectedUser(null);
    setIsPrivateChat(false);
  };

  const handleLeave = () => {
    disconnect();
    setIsJoined(false);
    setUsername('');
    setSelectedUser(null);
    setIsPrivateChat(false);
  };

  if (!isJoined) {
    return (
      <div className="join-container">
        <div className="join-form">
          <h1>Join Chat Room</h1>
          <form onSubmit={handleJoin}>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="submit">Join Chat</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>
          {isPrivateChat 
            ? `Private Chat with ${selectedUser?.username}` 
            : 'Global Chat Room'
          }
        </h2>
        <div className="connection-status">
          <span className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
          </span>
          <button onClick={handleLeave} className="leave-btn">
            Leave Chat
          </button>
        </div>
      </div>

      <div className="chat-content">
        <div className="users-sidebar">
          <h3>Online Users ({users.length})</h3>
          <div className="users-list">
            {users.map((user) => (
              <div
                key={user.id}
                className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
                onClick={() => startPrivateChat(user)}
              >
                <span className="user-status">🟢</span>
                <span className="username">{user.username}</span>
                {user.id === socket.id && <span className="you">(You)</span>}
              </div>
            ))}
          </div>
          {isPrivateChat && (
            <button onClick={leavePrivateChat} className="back-to-global">
              Back to Global Chat
            </button>
          )}
        </div>

        <div className="chat-main">
          <div className="messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.system ? 'system' : ''} ${
                  msg.senderId === socket.id ? 'own' : 'other'
                }`}
              >
                {!msg.system && (
                  <div className="message-header">
                    <span className="sender">{msg.sender}</span>
                    <span className="timestamp">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                )}
                <div className="message-content">
                  {msg.message}
                </div>
              </div>
            ))}
            {typingUsers.length > 0 && (
              <div className="typing-indicator">
                {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="message-form">
            <input
              type="text"
              placeholder={
                isPrivateChat 
                  ? `Send private message to ${selectedUser?.username}...`
                  : "Type your message..."
              }
              value={message}
              onChange={handleTyping}
              disabled={!isConnected}
            />
            <button type="submit" disabled={!isConnected || !message.trim()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom; 