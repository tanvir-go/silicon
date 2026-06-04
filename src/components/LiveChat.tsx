"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, Sparkles, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with system greeting
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "agent",
        text: "Hello! Welcome to Silicon Computing Ltd. How can we assist you with our B2B IT infrastructure and Enterprise Solutions today?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const userQuery = inputValue.trim().toLowerCase();
    setInputValue("");
    setIsTyping(true);

    // Simulate smart B2B support agent responses
    setTimeout(() => {
      let replyText = "Thank you for reaching out! One of our Enterprise Solution Specialists will join this conversation shortly. For immediate assistance, feel free to call our support line at 09614556655.";
      
      if (userQuery.includes("server") || userQuery.includes("dell") || userQuery.includes("hpe")) {
        replyText = "We offer a wide range of Dell PowerEdge and HPE ProLiant Rack Servers. Let us know your core count, RAM, and storage requirements so we can prepare a custom B2B quote for you!";
      } else if (userQuery.includes("switch") || userQuery.includes("cisco") || userQuery.includes("aruba")) {
        replyText = "We are an authorized reseller of Cisco Catalyst/Nexus and Aruba Instant On network switches. Could you specify if you need PoE support and the preferred port density (e.g., 24-port or 48-port)?";
      } else if (userQuery.includes("vmware") || userQuery.includes("vsphere") || userQuery.includes("license")) {
        replyText = "We specialize in VMware vSphere licensing, VCF Cloud Management, and backup software suites. Let us know if you require a new license key subscription or an upgrade/renewal.";
      } else if (userQuery.includes("contact") || userQuery.includes("email") || userQuery.includes("phone")) {
        replyText = "You can contact our sales team directly at sales@silicon.com.bd, call us at 09614556655, or submit an inquiry via our Contact form.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          sender: "agent",
          text: replyText,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[360px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#000072] p-5 text-white flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/45 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm flex items-center gap-1.5">
                    SCL Solution Bot
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-blue-200/90 font-medium tracking-wide uppercase">Enterprise Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white relative z-10 border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                      msg.sender === "user"
                        ? "bg-slate-100 border-slate-200 text-slate-600"
                        : "bg-[#000072]/5 border-[#000072]/10 text-[#000072]"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      className={`text-xs p-3.5 rounded-2xl leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#000072] text-white rounded-tr-none shadow-md shadow-[#000072]/10"
                          : "bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className={`text-[9px] text-slate-400 px-1 font-semibold flex items-center gap-1 ${msg.sender === "user" ? "justify-end" : ""}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {msg.sender === "user" && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2.5 max-w-[85%]">
                  <div className="w-7 h-7 rounded-full bg-[#000072]/5 border border-[#000072]/10 text-[#000072] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0">
              <input
                type="text"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#000072]/20 focus:border-[#000072]/45 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-[#000072] hover:bg-[#000072]/90 disabled:opacity-40 text-white flex items-center justify-center shadow-md shadow-[#000072]/20 transition-all cursor-pointer active:scale-95 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#000072] text-white flex items-center justify-center shadow-xl shadow-[#000072]/30 hover:bg-[#000072]/90 transition-all cursor-pointer border border-white/10 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#000072]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
