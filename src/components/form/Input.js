import Styles from "./css/Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value, step }) {
  return (
    <div className={Styles.form_control}>
      <label htmlFor={name}>{text && text + ":"}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        step={step}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
