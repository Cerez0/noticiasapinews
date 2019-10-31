import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    //Extraer Datos

    const {urlToImage, url, title, descrpition, source} = noticia;

    // condicionalmente cargar la imagen si esta disponible

    const imagen = (urlToImage) ? 
        <div>
            <img className="card-img-top" src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    
    : null;

    return(
        
        <div className="card col-12 col-md-3 text-center tarjeta-noticia ">
            <div className="card-body d-flex flex-column align-items-center flex-column">
                {imagen}
            
            
                <div className="card-title">
                    <h3 className="h5 mt-1 contenedor-texto-tarjeta">{title}</h3>
                </div>
                <div className="">
                    <p>{descrpition}</p>
                </div>
 
                <a href={url} target="_blank" rel="noopener noreferrer" className="boton-tarjeta btn btn-secondary"> Ver Noticia</a>
                
            </div>
        </div>
        
    );

}

Noticia.propTypes = {

    noticia : PropTypes.object.isRequired
}

export default Noticia;