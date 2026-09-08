import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Hallo",
  "Привет",
  "こんにちは",
  "你好",
  "안녕하세요",
  "Bawo ni",
  "Sannu",
  "Hello, I'm Paul"
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 150); // Fast cycling speed
      return () => clearTimeout(timer);
    } else {
      // Pause on the final text before completing
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink text-paper"
    >
      <div className="flex overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-tight"
          >
            {greetings[index]}
            {index === greetings.length - 1 && <span className="text-signal">.</span>}
          </motion.h2>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
