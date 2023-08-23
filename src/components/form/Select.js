import Styles from "./css/Select.module.css";

function Select({ multiple, text, name, handleOnChange, value = 0, options }) {
  return (
    <div className={Styles.form_control}>
      <label htmlFor={name}>{text && text + ":"}</label>
      <select
        multiple={multiple}
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value}
      >
        <option value="0" disabled>
          Selecione uma categoria
        </option>
        {options && options.map((item) => <option>{item}</option>)}
      </select>
    </div>
  );
}

export default Select;
