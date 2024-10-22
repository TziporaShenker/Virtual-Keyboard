import "./KeyBoard.css";
import Key from "./Key";
function KeyBoard({ language, onKeyPress }) {
  const keys = [
    { hebrew: "/", english: { lowerCase: "q", upperCase: "Q" }, id: "01", emoji: "😊" },
    { hebrew: "'", english: { lowerCase: "w", upperCase: "W" }, id: "02", emoji: "😎" },
    { hebrew: "ק", english: { lowerCase: "e", upperCase: "E" }, id: "03", emoji: "🔍" },
    { hebrew: "ר", english: { lowerCase: "r", upperCase: "R" }, id: "04", emoji: "🚀" },
    { hebrew: "א", english: { lowerCase: "t", upperCase: "T" }, id: "05", emoji: "🌍" },
    { hebrew: "ט", english: { lowerCase: "y", upperCase: "Y" }, id: "06", emoji: "🎉" },
    { hebrew: "ו", english: { lowerCase: "u", upperCase: "U" }, id: "07", emoji: "🏰" },
    { hebrew: "ן", english: { lowerCase: "i", upperCase: "I" }, id: "08", emoji: "🌟" },
    { hebrew: "ם", english: { lowerCase: "o", upperCase: "O" }, id: "09", emoji: "🔥" },
    { hebrew: "פ", english: { lowerCase: "p", upperCase: "P" }, id: "10", emoji: "⚡" },
    { hebrew: "ש", english: { lowerCase: "a", upperCase: "A" }, id: "11", emoji: "🌈" },
    { hebrew: "ד", english: { lowerCase: "s", upperCase: "S" }, id: "12", emoji: "🌺" },
    { hebrew: "ג", english: { lowerCase: "d", upperCase: "D" }, id: "13", emoji: "🍀" },
    { hebrew: "כ", english: { lowerCase: "f", upperCase: "F" }, id: "14", emoji: "🌼" },
    { hebrew: "ע", english: { lowerCase: "g", upperCase: "G" }, id: "15", emoji: "🍎" },
    { hebrew: "י", english: { lowerCase: "h", upperCase: "H" }, id: "16", emoji: "🎈" },
    { hebrew: "ח", english: { lowerCase: "j", upperCase: "J" }, id: "17", emoji: "🚗" },
    { hebrew: "ל", english: { lowerCase: "k", upperCase: "K" }, id: "18", emoji: "🚁" },
    { hebrew: "ך", english: { lowerCase: "l", upperCase: "L" }, id: "19", emoji: "🌙" },
    { hebrew: "ף", english: { lowerCase: ";", upperCase: ":" }, id: "20", emoji: "🎵" },
    { hebrew: "ז", english: { lowerCase: "z", upperCase: "Z" }, id: "21", emoji: "🍕" },
    { hebrew: "ס", english: { lowerCase: "x", upperCase: "X" }, id: "22", emoji: "📖" },
    { hebrew: "ב", english: { lowerCase: "c", upperCase: "C" }, id: "23", emoji: "🎨" },
    { hebrew: "ה", english: { lowerCase: "v", upperCase: "V" }, id: "24", emoji: "💗" },
    { hebrew: "נ", english: { lowerCase: "b", upperCase: "B" }, id: "25", emoji: "🍌" },
    { hebrew: "מ", english: { lowerCase: "n", upperCase: "N" }, id: "26", emoji: "🍏" },
    { hebrew: "צ", english: { lowerCase: "m", upperCase: "M" }, id: "27", emoji: "🎲" },
    { hebrew: "ת", english: { lowerCase: ",", upperCase: "," }, id: "28", emoji: "🎭" },
    { hebrew: "ץ", english: { lowerCase: ".", upperCase: "." }, id: "29", emoji: "💡" },
    { hebrew: ".", english: { lowerCase: "/", upperCase: "/" }, id: "30", emoji: "📎" },
    { hebrew: "SPACE", english: { lowerCase: "SPACE", upperCase: "SPACE" }, id: "31" , emoji: "SPACE"},
    { hebrew: "UNDO LAST", english: { lowerCase: "UNDO LAST", upperCase: "UNDO LAST" }, id: "32" ,emoji: "UNDO LAST"},
    { hebrew: "DELETE", english: { lowerCase: "DELETE", upperCase: "DELETE" }, id: "33" ,emoji: "DELETE"},
    { hebrew: "ENTER", english: { lowerCase: "ENTER", upperCase: "ENTER" }, id: "34" ,emoji: "ENTER"},
  ];
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };
  return (
    <div className="keys">
      {keys.map((key, index) => {
        return <Key {...key} language={language} onKeyPress={handleKeyPress} />;
      })}
    </div>
  );
}
export default KeyBoard;
