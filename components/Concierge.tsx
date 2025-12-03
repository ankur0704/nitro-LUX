import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Good evening. I am the NITRO Concierge. How may I assist you in acquiring excellence today?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const replyText = await sendMessageToConcierge(inputText);
    
    const botMsg: ChatMessage = { role: 'model', text: replyText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] bg-nitro-black/95 backdrop-blur-md border border-nitro-gold/30 shadow-2xl rounded-sm overflow-hidden flex flex-col transition-all duration-300 animate-slide-up h-[500px]">
          {/* Header */}
          <div className="bg-nitro-gray p-4 flex justify-between items-center border-b border-nitro-gold/20">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-nitro-gold/10 rounded-full border border-nitro-gold/50">
                <Sparkles size={16} className="text-nitro-gold" />
              </div>
              <div>
                <h3 className="text-nitro-white font-serif tracking-wider text-sm">NITRO CONCIERGE</h3>
                <p className="text-[10px] text-nitro-silver uppercase tracking-widest">Virtual Assistant</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-nitro-silver hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-nitro-gray">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-nitro-gold text-nitro-black rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                      : 'bg-nitro-gray text-nitro-silver border border-nitro-gray/50 rounded-tr-xl rounded-br-xl rounded-bl-xl'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-nitro-gray text-nitro-gold text-xs px-3 py-2 rounded-full animate-pulse">
                  Consulting the catalog...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-nitro-black border-t border-nitro-gray">
            <div className="flex items-center gap-2 bg-nitro-gray/30 p-2 rounded-sm border border-nitro-gray hover:border-nitro-gold/30 transition-colors">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask regarding our collection..."
                className="bg-transparent flex-1 text-sm text-white focus:outline-none placeholder-nitro-silver/50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 text-nitro-gold hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`group flex items-center gap-3 p-4 rounded-full shadow-lg border transition-all duration-300 ${
          isOpen 
            ? 'bg-nitro-gray border-nitro-gold text-nitro-gold rotate-90 opacity-0 pointer-events-none absolute' 
            : 'bg-nitro-gold text-nitro-black border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
        }`}
      >
        <MessageSquare size={24} fill="currentColor" className="opacity-80" />
      </button>
      
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-nitro-white text-nitro-black text-xs font-bold py-1 px-3 rounded-l-md transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Talk to Concierge
        </div>
      )}
    </div>
  );
};

export default Concierge;