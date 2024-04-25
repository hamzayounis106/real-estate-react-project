import React from "react";

const SplitText = ({ text }) => {
  // Splitting the text into an array of words
  const words = text.split(" ");

  return (
    // Mapping over the words array and wrapping each word with a span
    <>
      {words.map((word, index) => (
        <span key={index} className="word inline-block">
          {/* Splitting the word into characters and wrapping each character with a span */}
          {word.split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
          {/* Adding a space after each word */}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </>
  );
};

export default SplitText;