import { useState, useEffect } from "react";
import Styles from "./css/Message.module.css";

function Message({ type, msg, handleAfterShow }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      if (typeof handleAfterShow === "function") {
        handleAfterShow("");
      }
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${Styles.message} ${Styles[type ? type : "default"]}`}>
          {msg}
        </div>
      )}
    </>
  );
}

export default Message;
