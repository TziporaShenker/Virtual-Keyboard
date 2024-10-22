import "./ColorButtons.css";

function ColorButtons({onColorChange}){
  const colors = ["black", "red", "blue", "green"];
      return (
        <div className="color-container">
          {colors.map((color) => {
            return (
              <button
              key={color} className="color-button" id={`${color}`}
                onClick={() => onColorChange(color)}
              >
          {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            );
          })}
        </div>
      );
}
export default ColorButtons;