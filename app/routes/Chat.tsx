import React, { useState, useRef, useEffect } from "react";

const messages = [
  {
    id: 1,
    text: "Hi I'm interested in sponsoring your content",
    sent: true,
    status: "read",
  },
  {
    id: 2,
    text: "Which Ad type are you going for?",
    sent: false,
  },
];

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b bg-white relative">
        <button className="mr-2">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-200 mr-3" />
        <span className="font-medium text-lg flex-1">Jasmine D.</span>
        <button className="ml-2">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M18 8a2 2 0 11-4 0 2 2 0 014 0zM18 14a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 11-4 0 2 2 0 014 0z"
              fill="#fff"
            />
            <circle cx="20" cy="4" r="3" fill="#fff" />
            <circle cx="20" cy="4" r="2" fill="#EA5455" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) =>
          msg.sent ? (
            <div key={msg.id} className="flex flex-col items-end">
              <div className="bg-[#A48CF6] text-black rounded-2xl px-4 py-3 max-w-[75%] text-base shadow-sm">
                {msg.text}
              </div>
              <span className="text-xs text-gray-400 mt-1">{msg.status}</span>
            </div>
          ) : (
            <div key={msg.id} className="flex items-start">
              <div className="w-7 h-7 rounded-full bg-gray-200 mr-2" />
              <div className="bg-white text-black rounded-2xl px-4 py-3 max-w-[75%] text-base shadow-sm">
                {msg.text}
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="flex items-center px-3 py-3 border-t bg-white">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#A48CF6] mr-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#A48CF6" />
            <path
              d="M12 8v8M8 12h8"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <input
          className="flex-1 rounded-full bg-[#F3F3F3] px-4 py-2 outline-none text-base placeholder-gray-400"
          placeholder="Enter your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="ml-2 text-2xl">
          <span role="img" aria-label="smile">
            😊
          </span>
        </button>
        <button className="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#A48CF6]">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 19v-6m0 0V5m0 8l4-4m-4 4l-4-4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
