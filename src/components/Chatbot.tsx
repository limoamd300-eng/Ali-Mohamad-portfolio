import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send, User, ShieldCheck } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Greetings, I'm the AliOmar_Bot. How can I assist you?", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = { id: Date.now(), text: option, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse = "";
      switch (option) {
        case "View Skills":
          botResponse = "Ali specializes in Offensive Security (Penetration Testing, Exploitation) and Defensive Security (Encryption, SIEM). Check the 'Vault' section for details.";
          break;
        case "Request Quote":
          botResponse = "For security audits or consulting, please use the secure messaging protocol in the 'Contact' section.";
          break;
        case "Contact Ali Omar":
          botResponse = "You can reach Ali via LinkedIn, GitHub, or the contact form on this site. Connection established.";
          break;
        default:
          botResponse = "I'm not programmed for that query. Please select a valid protocol.";
      }
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 bg-deep-space border border-cyber-lime/30 rounded-lg shadow-2xl overflow-hidden flex flex-col h-96"
          >
            {/* Header */}
            <div className="bg-cyber-lime/10 p-3 border-b border-cyber-lime/30 flex justify-between items-center">
              <div className="flex items-center gap-2 text-cyber-lime">
                <ShieldCheck size={18} />
                <span className="font-mono text-sm font-bold tracking-tighter uppercase">AliOmar_Bot v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-cyber-lime transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyber-lime/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded text-xs font-mono ${
                    msg.sender === 'user' 
                      ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30' 
                      : 'bg-cyber-lime/10 text-cyber-lime border border-cyber-lime/30'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options */}
            <div className="p-3 bg-slate-900/50 border-t border-cyber-lime/20 flex flex-wrap gap-2">
              {["View Skills", "Request Quote", "Contact Ali Omar"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="text-[10px] uppercase font-mono px-2 py-1 border border-cyber-lime/20 hover:border-cyber-lime hover:bg-cyber-lime/10 transition-all text-slate-400 hover:text-cyber-lime"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyber-lime rounded-full flex items-center justify-center text-deep-space shadow-[0_0_20px_rgba(50,255,126,0.5)] hover:shadow-[0_0_30px_rgba(50,255,126,0.7)] transition-shadow"
      >
        {isOpen ? <X size={24} /> : <BotMessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
