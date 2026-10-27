import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Trash2, Sparkles } from 'lucide-react';
import { aiService, ChatMessage } from '../services/aiService';

interface RIETAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-welcome',
  sender: 'assistant',
  text: "Hi! I'm RIET AI.\nAsk me a general question and I'll help you.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export const RIETAssistant: React.FC<RIETAssistantProps> = ({
  isOpen,
  onClose,
  onOpen
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const text = inputText.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const reply = await aiService.sendMessage(text, [...messages, userMsg]);
      const aiMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: 'RIET AI is ready. When OPENAI_API_KEY is configured on your backend server, live answers will appear here.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING AI ASSISTANT BUTTON */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open RIET AI Assistant"
          className="fixed bottom-5 right-5 z-40 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 hover:scale-105 transition-all flex items-center space-x-2.5 cursor-pointer ring-2 ring-white"
        >
          <Bot className="w-5 h-5 text-cyan-200" />
          <span className="font-display">RIET AI</span>
        </button>
      )}

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[560px] animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="px-4 py-3.5 bg-blue-700 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-800 text-cyan-300 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm font-display leading-tight flex items-center space-x-1.5">
                  <span>RIET AI</span>
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                </h3>
                <p className="text-[11px] text-blue-200">"Your General AI Assistant"</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setMessages([INITIAL_MESSAGE])}
                className="p-1.5 text-blue-200 hover:text-white rounded-md transition-colors cursor-pointer"
                title="Clear chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-blue-200 hover:text-white rounded-md transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/60 min-h-[260px] max-h-[350px]">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs shadow-2xs whitespace-pre-wrap'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 px-1 mt-0.5">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-1.5 bg-white border border-slate-200 rounded-xl p-3 max-w-[80px]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask RIET AI a general question..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};
