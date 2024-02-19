import React from 'react';
import '../estilos/perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> del direcctor {props.direcctor}
            </p>
        <p className='cargo-perfil'>
            {props.cargo} asignado <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        {/* Agregamos los botones para seguir en LinkedIn, YouTube y Twitter */}
        <button onClick={() => window.open(props.wiki, '_blank')}>
            Ver Wiki
        </button>
        <button onClick={() => window.open(props.youtube, '_blank')}>
            Trailer en YouTube
        </button>
        <button onClick={() => window.open(props.twitter, '_blank')}>
            Ver en Twitter
        </button>
    </div>
    );
}


export default Perfil;