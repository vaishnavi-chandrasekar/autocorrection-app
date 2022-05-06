import { useState } from "react";
import "./App.css"

const correctionObject = {
  realy: "really",
  fynal: "finally",
  ovre: "over",
  wierd:"weird"
};
export default function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (event) => {
    const { value } = event.target;
    let finalValue = value;
    if (value[value.length - 1] === " ") {
      const wordArray = value.split(" ");
      const lastWord = wordArray[wordArray.length - 2];
      console.log(lastWord);
      const correctWord = correctionObject[lastWord];
      if (correctWord) {
        wordArray[wordArray.length - 2] = correctWord;
      }
      finalValue = wordArray.join(" ");
    }
    setText(finalValue);
  };

  return (
    <div className="App">
      <div className="text-center">
          <h1>Enter : realy, fynal, ovre, wierd</h1>
        <textarea
          value={text}
          data-testid="textarea"
          onChange={onChangeHandler}
          rows={5}
          cols={50}
          className="card"
        />
      </div>
    </div>
  );
}
