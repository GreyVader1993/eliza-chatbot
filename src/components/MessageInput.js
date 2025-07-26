import React from 'react';
import { elizaStyles } from '../styles/elizaStyles.js';

const MessageInput = ({ 
  value, 
  onChange, 
  onSend, 
  onKeyPress, 
  disabled, 
  inputRef 
}) => {
  return (
    <div className={elizaStyles.input.container}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Type your message here..."
        maxLength={200}
        disabled={disabled}
        className={elizaStyles.input.textInput}
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className={elizaStyles.input.button}
      >
        SEND
      </button>
    </div>
  );
};

export default MessageInput;