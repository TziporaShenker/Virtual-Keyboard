function Key({ hebrew, english, id,emoji, language, onKeyPress }) {
  let keyboardLanguage;
  if(language==="english.lowerCase"){
    keyboardLanguage=english.lowerCase;
  }
  else if(language==="english.upperCase"){
    keyboardLanguage=english.upperCase;
  } 
  else if(language==="emoji"){
    keyboardLanguage=emoji;
  }
  else 
    keyboardLanguage=hebrew;
  
  const handleClick = () => {
    onKeyPress(keyboardLanguage);
  };
  return (
    <div className="key">
      <button onClick={handleClick}>{keyboardLanguage}</button>
    </div>
  );
}
export default Key;
