import { useState } from "react";
import "./TextEditorApp.css";
import TypedTextDisplay from "./components/TypedTextDisplay";
import KeyBoard from "./components/KeyBoard";
import Language from "./components/Language";
import ColorButtons from "./components/ColorButtons";
import SizeButtons from "./components/SizeButtons";
import SpecialButtons from "./components/SpecialButtons";
import FontButtons from "./components/FontButtons";


function TextEditorApp() {
  const [typedText, setTypedText] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("hebrew");
  const [history, setHistory] = useState([]);
  const [currentColor, setCurrentColor] = useState("black");
  const [currentSize, setCurrentSize] = useState(18);
  const [currentFont, setCurrentFont] = useState("Arial");

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };
  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };
  const handleFontChange = (font) => {
    setCurrentFont(font);
  };
  const handleKeyPress = (key) => {
    if (key === "SPACE") {
      addToHistory(typedText);
      setTypedText([
        ...typedText,
        { char: " ", color: currentColor, size: currentSize,  font: currentFont},
      ]);
    } else if (key === "DELETE") {
      addToHistory(typedText);
      const newText = typedText.slice(0, -1);
      setTypedText(newText);
    } else if (key === "UNDO LAST") {
      undoLast();
    } else if (key === "ENTER") {
      addToHistory(typedText);
      setTypedText([
        ...typedText,
        { char: '\n', color: currentColor, size: currentSize, font: currentFont },
      ]);
    } else {
      addToHistory(typedText);
      setTypedText([
        ...typedText,
        { char: key, color: currentColor, size: currentSize, font: currentFont },
      ]);
    }
  };
  const undoLast = () => {
    if (history.length > 0) {
      console.log(history);
      const previousText = history.pop();
      setTypedText(previousText);
      // Note: It's important to create a new array when modifying the state array
      setHistory([...history]);
    }
  };
  const addToHistory = (text) => {
    // Limit the history length to, for example, 10 entries
    const newHistory = [...history, text];
    setHistory(newHistory);
  };
  const handleSpecialPress = (key) => {
    addToHistory(typedText);
    if (key === "Clear All") {
      setTypedText([]);
    } else if (key === "UPPER All") {
      let newTypedText = typedText.map((item) => ({
        char: item.char.toUpperCase(),
        color: item.color,
        size: item.size,
        font: item.font,
      }));
      setTypedText(newTypedText);
    } else {
      let newTypedText = typedText.map((item) => ({
        char: item.char.toLowerCase(),
        color: item.color,
        size: item.size,
        font: item.font,
      }));
      setTypedText(newTypedText);
    }
  };

  return (
    <>
      <TypedTextDisplay typedText={typedText} />
      <KeyBoard language={currentLanguage} onKeyPress={handleKeyPress} />
      <Language
        onLanguageChange={(language) => {
          console.log(language);
          setCurrentLanguage(language);
        }}
      />
      <ColorButtons onColorChange={handleColorChange} />
      <SizeButtons onSizeChange={handleSizeChange} />
      <FontButtons onFontChange={handleFontChange} />
      <SpecialButtons onSpecial={handleSpecialPress} />
    </>
  );
}

export default TextEditorApp;
