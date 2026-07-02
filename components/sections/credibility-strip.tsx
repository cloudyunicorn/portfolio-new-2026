"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function CredibilityStrip() {
  const items = [
    { text: "15+ Projects Built" },
    { text: "React • Next.js • FastAPI" },
    { text: "AI Agents & Automation" },
    { text: "Available Worldwide" }
  ];

  return (
    <div className="w-full border-y border-border/40 bg-muted/10 py-5 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center items-center text-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/80"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
