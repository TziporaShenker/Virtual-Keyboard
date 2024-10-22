import "./ColorButtons.css";

function FontButtons({ onFontChange }) {
  const fonts = ["Arial", "Monospace", "Cursive", "Times New Roman"];
  return (
    <div className="color-container">
      {fonts.map((font) => {
        return (

          <button
            key={font} className="color-button" id={`${font.slice(0, 5)}`}
            onClick={() => onFontChange(font)}
          >
            {font}
          </button>
        );
      }
      )}
    </div>
  );
}
export default FontButtons;