import Container from "../../../layouts/Container";
import ServiceCard from "../../../service/ServiceCard";

function ListServices({ services }) {
  function removeService() {}
  return (
    <>
      <h2>Serviços</h2>
      <Container customClass="start">
        {services.length > 0 &&
          services.map((service) => (
            <ServiceCard
              id={service.id}
              name={service.name}
              cost={service.cost}
              description={service.description}
              key={service.id}
              handleRemove={removeService}
            />
          ))}
        {services.length === 0 && <p>Não há serviços cadastrados</p>}
      </Container>
    </>
  );
}

export default ListServices;
