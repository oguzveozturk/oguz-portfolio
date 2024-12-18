import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";

function HighlightedText({ highlightText, wholeText }) {
  const [highlightColor, setHighlightColor] = useState("#FFAD95");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const updateHighlightColor = () => {
        const newColor = root.classList.contains('dark') ? "#f96036" : "#FFAD95";
        if (highlightColor !== newColor) {
          setHighlightColor(newColor);
        }
      };

      updateHighlightColor();
      const observer = new MutationObserver(updateHighlightColor);
      observer.observe(root, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
    }
  }, [highlightColor]); // Added highlightColor as a dependency

  const getHighlightedText = () => {
    const parts = wholeText.split(new RegExp(`(${highlightText})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightText.toLowerCase()) {
        return (
          <RoughNotation
            type="highlight"
            show={true}
            color={highlightColor}
            animationDuration={1200}
            key={`${index}-${highlightColor}`} // Use a unique key
          >
            {part}
          </RoughNotation>
        );
      } else {
        return part.split('\n').map((line, lineIndex) => (
          <span key={`${index}-${lineIndex}`}>
            {line}
            {lineIndex < part.split('\n').length - 1 && <br />}
          </span>
        ));
      }
    });
  };

  return (
    <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold leading-loose lg:text-justify	 md:leading-normal lg:leading-normal">
      {getHighlightedText()}
    </h2>
  );
}

export default HighlightedText;
