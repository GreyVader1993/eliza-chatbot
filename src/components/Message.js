import React from 'react';
import { elizaStyles } from '../styles/elizaStyles.js';

const Message = ({ message, isUser }) => {
  const messageClass = `${elizaStyles.chat.message} ${
    isUser ? elizaStyles.chat.userMessage : elizaStyles.chat.elizaMessage
  }`;

  return (
    <div className={messageClass}>
      {message}
    </div>
  );
};

export default Message;