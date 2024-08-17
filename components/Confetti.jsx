import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ConfettiComponent({ visible }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {visible && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={200}
          gravity={0.5}
          recycle={false}
        />
      )}
    </div>
  );
}
