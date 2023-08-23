import Styles from "./css/Home.module.css";
import Economias from "../../img/savings.svg";
import LinkButton from "../layouts/LinkButton";

function Home() {
  return (
    <section className={Styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projetos" />
      <img src={Economias} alt="Costs" />
    </section>
  );
}

export default Home;
