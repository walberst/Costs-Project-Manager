import { Link } from "react-router-dom";

import Styles from "./css/LinkButton.module.css";

function LinkButton({ to, text, iconLeft, iconRight }) {
  return (
    <Link className={Styles.btn} to={to}>
      {iconLeft} {text} {iconRight}
    </Link>
  );
}

export default LinkButton;
