import { Link } from "react-router-dom";
import Styles from "./css/ProjectCard.module.css";

import { FaTrashAlt, FaEye } from "react-icons/fa";
import FormatCurrency from "../utils/FormatCurrency";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={Styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> {FormatCurrency(budget)}
      </p>
      <p className={Styles.category_text}>
        <span
          className={`${Styles[category.toLowerCase().replace(/\s+/g, "_")]}`}
        ></span>{" "}
        {category}
      </p>
      <div className={Styles.project_card_actions}>
        <Link to={`/project/${id}`}>{<FaEye />} Visualizar</Link>
        <button onClick={remove}>
          <FaTrashAlt /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
