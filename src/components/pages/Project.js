import Styles from "./css/Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiGet from "../requests/ApiGet";
import ApiPatch from "../requests/ApiPatch";
import Loading from "../layouts/Loading";
import Container from "../layouts/Container";
import Message from "../layouts/Message";
import DetailsProject from "./subSessions/project/DetailsProject";
import AddServices from "./subSessions/project/AddServices";
import ListServices from "./subSessions/project/ListServices";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    async function fetchProject() {
      const dataApiProject = await ApiGet({ service: `/projects/${id}` });
      if (dataApiProject.data) {
        dataApiProject.data.budget = parseFloat(dataApiProject.data.budget);
        setProject(dataApiProject.data);
        setServices(dataApiProject.data.services);
      }
    }

    fetchProject();
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  async function editPost(project) {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
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
            {console.log(message)}
            {message && (
              <Message type={type} msg={message} handleAfterShow={setMessage} />
            )}
            <DetailsProject
              Styles={Styles}
              handleOnClick={toggleProjectForm}
              handleOnSubmit={editPost}
              showProjectForm={showProjectForm}
              project={project}
            />
            <AddServices
              Styles={Styles}
              handleOnClick={toggleServiceForm}
              showServiceForm={showServiceForm}
              project={project}
              setMessage={setMessage}
              setType={setType}
              setshowServiceForm={setShowServiceForm}
            />
            <ListServices services={services} />
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
