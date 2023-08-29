import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import Styles from "../project/css/ProjectForm.module.css";

function ServiceForm({ textBtn, handleSubmit, projectData }) {
  const [service, setService] = useState({});

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }
  return (
    <form onSubmit={submit} className={Styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descricao do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />

      <SubmitButton text={textBtn} />
    </form>
  );
}

export default ServiceForm;
