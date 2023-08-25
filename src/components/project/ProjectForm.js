import { useState, useEffect } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import Styles from "./css/ProjectForm.module.css";
import ApiGet from "../requests/ApiGet";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    async function fetchCategories() {
      const dataApiCategory = await ApiGet({ service: "/categories" });
      setCategories(dataApiCategory.data);
    }

    fetchCategories();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setProject({
      ...project,
      [e.target.name]: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={Styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        step="0.01"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o valor total do orçamento"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        text="Selecione a categoria"
        name="category"
        options={categories}
        handleOnChange={handleSelect}
        value={project.category ? project.category.id : "0"}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
