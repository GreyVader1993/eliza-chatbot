"use client";

import React, { useState, useEffect, useRef } from "react";
import { ElizaEngine } from "../utils/elizaEngine.js";
import ChatContainer from "./ChatContainer.js";
import MessageInput from "./MessageInput.js";
import { elizaStyles } from "../styles/elizaStyles.js";

const ELIZA = () => {
  const [messages, setMessages] = useState([
    { text: "Hello. I am ELIZA. Please tell me your problem.", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [elizaEngine] = useState(() => new ElizaEngine());

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const sendMessage = () => {
    const message = inputValue.trim();
    if (!message || isTyping) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = elizaEngine.getResponse(message);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={elizaStyles.container}>
      <div className={elizaStyles.innerContainer}>
        {/* Header */}
        <div className={elizaStyles.header.container}>
          <h1
            className={elizaStyles.header.title}
            style={{ textShadow: "0 0 10px #00ff00" }}
          >
            ELIZA
          </h1>
          <div className={elizaStyles.header.subtitle}>
            The Original Chatbot (1964-1966)
          </div>
          <div className={elizaStyles.header.description}>
            A recreation of Joseph Weizenbaum&apos;s pioneering conversational
            program
          </div>
        </div>

        {/* Chat Container */}
        <ChatContainer
          ref={chatContainerRef}
          messages={messages}
          isTyping={isTyping}
        />

        {/* Input */}
        <MessageInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={sendMessage}
          onKeyPress={handleKeyPress}
          disabled={isTyping}
          inputRef={inputRef}
        />

        {/* Info */}
        <div className={elizaStyles.info}>
          Press Enter to send • ELIZA uses pattern matching and keyword
          transformation
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}</style>
    </div>
  );
};

export default ELIZA;
