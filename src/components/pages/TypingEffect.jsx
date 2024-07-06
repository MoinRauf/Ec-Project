import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (currentIndex < text.length) {
          return prev + text[currentIndex];
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
      currentIndex++;
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
