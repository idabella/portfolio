import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieur en Formation",
          "Data Science & Big Data",
          "Full-Stack Developer",
          "AI & LLM Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
