import Styles from "./css/SubmitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div>
      <button className={Styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
