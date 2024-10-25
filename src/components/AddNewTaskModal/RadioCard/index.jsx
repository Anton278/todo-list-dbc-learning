import s from "./RadioCard.module.css";

function RadioCard({ value, name, checked, onChange }) {
  return (
    <label>
      <input
        type="radio"
        checked={checked}
        className={s.input}
        name={name}
        value={value}
        onChange={() => onChange(name, value)}
      />
      <span className={s.radiobox} style={{ backgroundColor: value }} />
    </label>
  );
}

export default RadioCard;
