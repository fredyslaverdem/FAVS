import './App.css';
import Perfil from './componentes/perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1> Mis peliculas favoritas son</h1>
      <Perfil 
        nombre='Bastardos sin gloria'
        direcctor='Quentin Tarantino'
        imagen='bast'
        cargo='Genero'
        empresa='Acción'
        perfil='Es el primer año de la ocupación alemana de Francia. El oficial aliado, teniente Aldo Raine, ensambla un equipo de soldados judíos para cometer actos violentos en contra de los nazis, incluyendo la toma de cabelleras. Él y sus hombres unen fuerzas con Bridget von Hammersmark, una actriz alemana y agente encubierto, para derrocar a los líderes del Tercer Reich. Sus destinos convergen con la dueña de teatro Shosanna Dreyfus, quien busca vengar la ejecución de su familia.'
      />
     </div>
     <div class ='contenedor-principal'>
      <Perfil 
        nombre='La La Land'
        direcctor='Damien Chazelle'
        imagen='lalaland'
        cargo='Genero'
        empresa='Romcom'
        perfil='Sebastian, un pianista de jazz, y Mia, una aspirante a actriz, se enamoran locamente; pero la ambición desmedida que tienen por triunfar en sus respectivas carreras, en una ciudad como Los Ángeles, repleta de competencia y carente de piedad, pone en peligro su amor.'
      />
     </div>
     <div class ='contenedor-principal'>
      <Perfil 
        nombre='El libro de la vida'
        direcctor='Jorge R. Gutiérrez'
        imagen='libro'
        cargo='Genero'
        empresa='Fantasía/Aventura'
        perfil='La familia de Manolo quiere que sea torero, pero él desea ser músico. El joven vivirá una aventura mágica por tres mundos de fantasía y, durante su odisea, tendrá que decidir si sigue los impulsos de su corazón o el deseo de su familia.'
      />
     </div>
    </div>
    
  );
}

export default App;
