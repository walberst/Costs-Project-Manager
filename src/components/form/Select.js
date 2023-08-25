import Styles from "./css/Select.module.css";

function Select({ multiple, text, name, handleOnChange, value, options }) {
  return (
    <div className={Styles.form_control}>
      <label htmlFor={name}>{text && text + ":"}</label>
      <select
        multiple={multiple}
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option value="0">Selecione uma categoria</option>
        {options &&
          options.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
