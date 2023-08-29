import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import ServiceForm from "../../../service/ServiceForm";
import { parse, v4 as uuidv4 } from "uuid";
import ApiPatch from "../../../requests/ApiPatch";

function AddServices({
  Styles,
  handleOnClick,
  showServiceForm,
  project,
  setMessage,
  setType,
  setshowServiceForm,
}) {
  async function createService(project) {
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("danger");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    await ApiPatch({ service: `/projects/${project.id}`, data: project });
    setMessage("Serviço adicionado com sucesso!");
    setType("success");
    setshowServiceForm(false);
  }
  return (
    <div className={Styles.service_form_container}>
      <h2>Adicione um serviço:</h2>
      <button className={Styles.btn} onClick={handleOnClick}>
        {!showServiceForm ? (
          <>
            <FaPlusCircle />
            Adicionar Serviço
          </>
        ) : (
          <>
            <FaTimesCircle /> Cancelar
          </>
        )}
      </button>
      <div className={Styles.project_info}>
        {showServiceForm && (
          <ServiceForm
            handleSubmit={createService}
            textBtn="Adicionar Serviço"
            projectData={project}
          />
        )}
      </div>
    </div>
  );
}

export default AddServices;
