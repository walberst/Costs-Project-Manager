import Styles from "./css/Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import ApiGet from "../requests/ApiGet";
import ApiPatch from "../requests/ApiPatch";
import Loading from "../layouts/Loading";
import Container from "../layouts/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layouts/Message";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    async function fetchProject() {
      const dataApiProject = await ApiGet({ service: `/projects/${id}` });
      if (dataApiProject.data) {
        dataApiProject.data.budget = parseFloat(dataApiProject.data.budget);
        setProject(dataApiProject.data);
      }
    }

    fetchProject();
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  async function editPost(project) {
    if (project.budget < project.cost) {
      setMessage("O custo do projeto não pode ser maior que o orçamento");
      setType("danger");
      return false;
    }
    const dataUpdate = await ApiPatch({
      service: `/projects/${id}`,
      data: project,
    });
    setProject(dataUpdate.data);
    setShowProjectForm(false);
    setMessage("Projeto atualizado");
    setType("success");
  }

  return (
    <>
      {project.name ? (
        <div className={Styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={Styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={Styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? (
                  <>
                    <BsPencil /> Editar Projeto
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
                    <span>Orçamento Total:</span>{" "}
                    {project.budget.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p>
                    <span>Orçamento Utilizado:</span>{" "}
                    {project.cost.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              ) : (
                <div className={Styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
