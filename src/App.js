import './App.css';
import Conteudo from './components/Conteudo';
import Curriculo from './components/curriculo';
import foto, { Foto } from './components/foto';

function App() {
  return (
    <div className='atras'>
      <Curriculo />
      <br></br>
      <Foto/>
      <br></br>
      <Conteudo/>
      <br></br>
    </div>

  );
}
export default App;
