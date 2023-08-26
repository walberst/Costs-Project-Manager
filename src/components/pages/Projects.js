import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Styles from "./css/Projects.module.css";

import Message from "../layouts/Message";
import Container from "../layouts/Container";
import LinkButton from "./../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import ApiGet from "../requests/ApiGet";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    async function fetchCategories() {
      const dataApiProjects = await ApiGet({ service: "/projects" });
      setProjects(dataApiProjects.data);
    }

    fetchCategories();
  }, []);

  return (
    <div className={Styles.project_container}>
      <div className={Styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton text="Novo Projeto" to="/newproject" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
          />
        ))}
      </Container>
    </div>
  );
}

export default Projects;
