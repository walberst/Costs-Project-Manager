import { FaTimesCircle, FaPen } from "react-icons/fa";
import ProjectForm from "../../../project/ProjectForm";
import FormatCurrency from "../../../utils/FormatCurrency";

function DetailsProject({
  Styles,
  handleOnClick,
  handleOnSubmit,
  showProjectForm,
  project,
}) {
  return (
    <div className={Styles.details_container}>
      <h1>Projeto: {project.name}</h1>
      <button className={Styles.btn} onClick={handleOnClick}>
        {!showProjectForm ? (
          <>
            <FaPen /> Editar Projeto
          </>
        ) : (
          <>
            <FaTimesCircle /> Cancelar
          </>
        )}
      </button>
      {!showProjectForm ? (
        <div className={Styles.project_info}>
          <p>
            <span>Categoria:</span> {project.category.name}
          </p>
          <p>
            <span>Orçamento Total:</span> {FormatCurrency(project.budget)}
          </p>
          <p>
            <span>Orçamento Utilizado:</span> {FormatCurrency(project.cost)}
          </p>
        </div>
      ) : (
        <div className={Styles.project_info}>
          <ProjectForm
            handleSubmit={handleOnSubmit}
            btnText="Concluir edição"
            projectData={project}
          />
        </div>
      )}
    </div>
  );
}

export default DetailsProject;
