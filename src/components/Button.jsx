"use client";
import "../assets/Button.css";
const Button = ({ onClick, text, disabled }) => {
  return (
    <div className="container">
      <button className="Button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;