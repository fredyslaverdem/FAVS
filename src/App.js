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
        wiki='https://es.wikipedia.org/wiki/Inglourious_Basterds'
        youtube='https://www.youtube.com/watch?v=XrDTjOV7kU0'
        twitter='https://twitter.com/search?q=%23inglorious%20%23bastards&src=typed_query&f=top'
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
        wiki='https://es.wikipedia.org/wiki/La_La_Land_(pel%C3%ADcula)'
        youtube='https://www.youtube.com/watch?v=45s24h98iOc'
        twitter='https://twitter.com/search?q=%23lalaland&src=typed_query'
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
        wiki='https://es.wikipedia.org/wiki/El_libro_de_la_vida'
        youtube='https://www.youtube.com/watch?v=JvIvF8ST8CY'
        twitter='https://twitter.com/search?q=%23ElLibroDeLaVida&src=typed_query'
      />
     </div>
    </div>
    
  );
}

export default App;
