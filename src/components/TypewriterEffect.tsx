import { useEffect, useState } from "react";

const phrases = [
  "React Developer",
  "Node.js Developer",
  "MERN Stack Builder",
];

const TypewriterEffect = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className="font-mono text-primary">
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="animate-pulse-glow">|</span>
    </span>
  );
};

export default TypewriterEffect;
