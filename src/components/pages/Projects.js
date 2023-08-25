import { useLocation } from "react-router-dom";

import Styles from "./css/Projects.module.css";

import Message from "../layouts/Message";
import Container from "../layouts/Container";
import LinkButton from "./../layouts/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={Styles.project_container}>
      <div className={Styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton text="Novo Projeto" to="/newproject" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Projects;
