import React from "react";
import { Button, Card } from "react-bootstrap";
import css from "./birthday.module.css";
import Image from "next/image";

export default function BirthdayComponent({ onButtonClick, isShowing }) {
  return (
    <div className={css.card}>
      {!isShowing && <Button className={css.button} onClick={onButtonClick}>Click me</Button>}
      {isShowing && (
        <div className={css.animate}>
          {/* You can add a cake image or description here */}
          <Image
            src="/Birthday-cake.png"
            alt="Birthday Cake"
            width={300}
            height={300}
          />
          <h2 className={css.center}>Happy Birthday!</h2>
        </div>
      )}
    </div>
  );
}
