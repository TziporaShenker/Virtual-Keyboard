import "./SizeButtons.css";

function SizeButtons({ onSizeChange }) {
  const sizes = [12, 18, 24, 30];
  return (
    <div className="size-container">
      {sizes.map((size) => {
        return (
          <button
            key={size}
            className="size-button"
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
export default SizeButtons;
