
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "ai";
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hi! I'm Rajat's AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }]
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      setIsLoading(false);
      setIsStreaming(true);

      const reader = response.body?.getReader();
      const decoder = new TextEncoder();
      let aiResponse = "";

      setMessages((prev) => [...prev, { role: "ai", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = new TextDecoder().decode(value);
          aiResponse += chunk;

          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { role: "ai", content: aiResponse };
            return next;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, I encountered an error. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] sm:w-[400px] h-[500px] bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-muted/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Rajat's Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full h-8 w-8">
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex w-full gap-2",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none border border-border/50"
                    )}
                  >
                    {msg.role === "ai" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ node, ...props }: any) => (
                            <a
                              {...props}
                              className="text-primary font-semibold underline hover:text-primary/80 transition-colors"
                              target={props.href?.startsWith("http") ? "_blank" : undefined}
                              rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                            />
                          ),
                          p: ({ node, children, ...props }: any) => <p className="mb-2 last:mb-0" {...props}>{children}</p>,
                          ul: ({ node, children, ...props }: any) => <ul className="list-disc ml-4 mb-2" {...props}>{children}</ul>,
                          ol: ({ node, children, ...props }: any) => <ol className="list-decimal ml-4 mb-2" {...props}>{children}</ol>,
                          li: ({ node, children, ...props }: any) => <li className="mb-1" {...props}>{children}</li>,
                          code: ({ node, children, ...props }: any) => <code className="bg-background/50 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>{children}</code>
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                    {!msg.content && msg.role === "ai" && (
                      <div className="flex gap-1 py-1">
                        <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && !isStreaming && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-muted text-foreground rounded-2xl rounded-tl-none px-4 py-2 text-sm border border-border/50">
                    <div className="flex gap-1 py-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-muted/30">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Rajat..."
                  className="pr-12 rounded-xl bg-background border-border focus:ring-1 focus:ring-primary h-11"
                  disabled={isLoading || isStreaming}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading || isStreaming}
                  className="absolute right-1.5 top-1.5 h-8 w-8 rounded-lg"
                >
                  {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Send size={16} />}
                </Button>
              </form>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Conversion-focused AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 transform group",
          isOpen ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:hidden" />
        )}
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
