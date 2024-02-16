import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1> MIs peliculas favoritas son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
      />
      <Perfil
        nombre2='Brais Moure'
        pais2='España'
        imagen2='brais'
        cargo2='Ingeniero de Software'
        empresa2='MoureDev'
        perfil2='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
      />
     </div>
    </div>
  );
}

export default App;
