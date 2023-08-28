import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Styles from "./css/Projects.module.css";

import Message from "../layouts/Message";
import Container from "../layouts/Container";
import LinkButton from "./../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import ApiGet from "../requests/ApiGet";
import Loading from "../layouts/Loading";
import ApiDelete from "../requests/ApiDelete";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState();

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  async function removeProject(id) {
    await ApiDelete({ service: `/projects/${id}` });
    setProjects(projects.filter((project) => project.id !== id));
    setProjectMessage("Projeto removido com sucesso!");
  }

  useEffect(() => {
    async function fetchCategories() {
      const dataApiProjects = await ApiGet({ service: "/projects" });
      if (dataApiProjects.data) {
        setProjects(dataApiProjects.data);
      }
      setRemoveLoading(true);
    }

    fetchCategories();
  }, [projectMessage]);

  return (
    <div className={Styles.project_container}>
      <div className={Styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton text="Novo Projeto" to="/newproject" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <Container customClass="start">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
