import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Styles from "./css/ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={Styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        step="0.01"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o valor total do orçamento"
      />
      <Select text="Selecione a categoria" name="category_id" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
