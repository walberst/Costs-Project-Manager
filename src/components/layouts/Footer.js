import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <ul className={Styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={Styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
