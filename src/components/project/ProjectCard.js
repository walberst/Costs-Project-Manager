import { Link } from "react-router-dom";
import Styles from "./css/ProjectCard.module.css";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import LinkButton from "../layouts/LinkButton";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  console.log(category.toLowerCase().replace(/\s+/g, "_"));
  return (
    <div className={Styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={Styles.category_text}>
        <span
          className={`${Styles[category.toLowerCase().replace(/\s+/g, "_")]}`}
        ></span>{" "}
        {category}
      </p>
      <div className={Styles.project_card_actions}>
        <Link to="/">{<BsPencil />} Editar</Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
