import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
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
  "Hello"
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const lastIndex = greetings.length - 1;

    // Always force to "Hello" (last item) before completing
    if (indexRef.current >= lastIndex) {
      setIndex(lastIndex); // Ensure we show "Hello"
      const timer = setTimeout(handleComplete, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      indexRef.current += 1;
      setIndex(indexRef.current);
    }, 150);

    return () => clearTimeout(timer);
  }, [index, handleComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink text-paper"
    >
      <div className="flex overflow-hidden items-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={greetings[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-tight"
          >
            {greetings[index]}
          </motion.h2>
        </AnimatePresence>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-tight whitespace-pre">
          , I'm Paul<span className="text-signal">.</span>
        </h2>
      </div>
    </motion.div>
  );
}
