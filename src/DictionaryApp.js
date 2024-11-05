import React, { useState } from "react";

const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function DictionaryApp() {
  const [inputText, setInputText] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");

  const handleMeaningSearch = (e) => {
    e.preventDefault();

    // Implement a basic dictionary lookup to find the meaning of the word
    const foundWord = customDictionary.find(
      (word) =>
        word.word === inputText ||
        word.word.toLowerCase() === inputText.toLowerCase()
    );

    if (foundWord) {
      setWordMeaning(foundWord.meaning);
    } else {
      setWordMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        value={inputText}
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleMeaningSearch}>Search</button> <br />
      <strong>Definition:</strong>
      {wordMeaning && <p>{wordMeaning}</p>}
    </div>
  );
}

export default DictionaryApp;
