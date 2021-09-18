import React from "react";
import "./App.css";
import { amen } from "./chunks/amen";

function splitString(string: string, size: number) {
  const re = new RegExp(".{1," + size + "}", "g");
  return string.match(re);
}

function randomIntFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const audioHeader = "data:audio/wav;base64,";
  const numberOfChunks = randomIntFromRange(320, 2048);

  const chunks = splitString(amen, 64000);
  let audioSrc = `${audioHeader}${chunks![0]}`;
  for (let i = 0; i < numberOfChunks; i++) {
    const chunkNumber = randomIntFromRange(1, chunks!.length - 1);
    audioSrc += chunks![chunkNumber];
  }
  return (
    <div className="App">
      <header className="App-header">
        PLAY SOME RANDOM AMEN BREAKS
        <div>
          <audio controls autoPlay loop src={audioSrc} />
        </div>
      </header>
    </div>
  );
}

export default App;
