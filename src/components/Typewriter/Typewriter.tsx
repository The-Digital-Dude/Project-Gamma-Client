"use client";

import React from "react";

type TypewriterProps = {
  phrases: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseBetweenPhrasesMs?: number;
  className?: string;
};

export default function Typewriter({
  phrases,
  typingSpeedMs = 40,
  deletingSpeedMs = 28,
  pauseBetweenPhrasesMs = 900,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[phraseIndex % phrases.length];

    if (!isDeleting && displayText === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseBetweenPhrasesMs);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const nextText = isDeleting
      ? current.slice(0, displayText.length - 1)
      : current.slice(0, displayText.length + 1);

    const t = setTimeout(
      () => setDisplayText(nextText),
      isDeleting ? deletingSpeedMs : typingSpeedMs
    );
    return () => clearTimeout(t);
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeedMs,
    deletingSpeedMs,
    pauseBetweenPhrasesMs,
  ]);

  return (
    <span className={className ? `${className} typewriter` : "typewriter"}>
      {displayText}
      <span className="typewriter__caret" aria-hidden>
        |
      </span>
    </span>
  );
}
