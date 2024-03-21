import { Header } from "../../components/header";
import background from '../../assets/background.png';
import ItemList from "../../components/ItemList";

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/32931894?v=4" className="profile" alt="imagem de perfil" />
            <div>
              <h3>Thiago Vasconcelos Braga</h3>
              <span>@thiagovb46</span>
              <p>Desenvolvedor Back-End | .NET | Java | SQL Server | Oracle</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio"> Repositórios </h4>
            <ItemList title="Teste 1" description= "Teste de Descrição"/>
            <ItemList title="Teste 1" description= "Teste de Descrição"/>
            <ItemList title="Teste 1" description= "Teste de Descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
