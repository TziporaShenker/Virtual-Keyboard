import React from "react";
import "./Language.css";

function Language({ onLanguageChange }) {
  const languages = [
    { name: "English", language: "english.lowerCase" },
    { name: "עברית", language: "hebrew" },
    { name: "UPPER-CASE", language: "english.upperCase" },
    { name: "lower-case", language: "english.lowerCase" },
    { name: "emoji", language: "emoji" },

  ];
  const handleLanguageClick = (language) => {
    onLanguageChange(language);
  };

  return (
    <div className="language-container">
      {languages.map((language, index) => {
        return (
          <button
            className="language-button"
            key={index}
            onClick={() => handleLanguageClick(language.language)}
          >
            {language.name}
          </button>
        );
      })}
    </div>
  );
}

export default Language;
