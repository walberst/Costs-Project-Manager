import Styles from "../project/css/ProjectCard.module.css";
import FormatCurrency from "../utils/FormatCurrency";
import { FaTrashAlt } from "react-icons/fa";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {};
  return (
    <div className={Styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo Total:</span> {FormatCurrency(cost)}
      </p>
      <p>{description}</p>
      <div className={Styles.project_card_actions}>
        <button onClick={remove}>
          <FaTrashAlt /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
