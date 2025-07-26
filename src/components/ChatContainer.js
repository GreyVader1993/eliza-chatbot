import React, { forwardRef } from "react";
import Message from "./Message.js";
import { elizaStyles } from "../styles/elizaStyles.js";

// eslint-disable-next-line react/display-name
const ChatContainer = forwardRef(({ messages, isTyping }, ref) => {
  return (
    <div ref={ref} className={elizaStyles.chat.container}>
      {messages.map((message, index) => (
        <Message key={index} message={message.text} isUser={message.isUser} />
      ))}

      {isTyping && (
        <div className={elizaStyles.chat.typing}>ELIZA is thinking...</div>
      )}
    </div>
  );
});

export default ChatContainer;
