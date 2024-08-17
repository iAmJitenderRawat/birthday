"use client";
import BirthdayComponent from "@/components/Birthday/Birthday";
import ConfettiComponent from "@/components/Confetti";
import { useState } from "react";

export default function Home() {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleButtonClick = () => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      },3000)
    };
  return (
    <main>
      <BirthdayComponent onButtonClick={handleButtonClick} isShowing={showConfetti} />
      <ConfettiComponent visible={showConfetti} />
    </main>
  );
}
