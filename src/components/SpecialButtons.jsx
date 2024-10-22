import "./ColorButtons.css";

function SpecialButtons({ onSpecial }) {
  const spacials = ["Clear All", "UPPER All", "lower All"];
  return (
    <div className="color-container">
      {spacials.map((special) => {
        return (
          <button
            key={special} className="color-button"
            onClick={() => onSpecial(special)}
          >
            {special}
          </button>
        );
      })}
    </div>
  );
}
export default SpecialButtons;