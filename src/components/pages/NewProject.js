import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";
import Styles from "./css/NewProject.module.css";
import ApiPost from "./../requests/ApiPost";

function NewProject() {
  const navigate = useNavigate();

  async function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];
    const response = await ApiPost({ service: "projects", data: project });
    if (response.success) {
      navigate("/projects", {
        state: { message: "Projeto criado com sucesso" },
      });
    } else {
      console.error("Erro ao criar o projeto");
    }
  }

  return (
    <div className={Styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
