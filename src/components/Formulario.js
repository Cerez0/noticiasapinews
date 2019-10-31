import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {
        categoria : 'General',
        pais : 'mx'
    }

    cambiarCategoria = e => {

        this.setState({
            categoria : e.target.value,
            pais : e.target.value
        }, ()=> {

            console.log(this.state.categoria + " " +this.state.pais);
            // pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria);
            
        });
    }

    

    resultados = ()=> {

        console.log(this.state.categoria + " " +this.state.pais);
        // pasarlo a la pagina principal
        this.props.consultarNoticias(this.state.categoria, this.state.pais);
        
    }

    

    render() {

        return(
            <div className="col-12">


                {/* Categorias Noticias */}
                <div className="contenedor-desplegable row">
                    
                    <h2 className="titulo2 text-primary">Encuentra Noticias</h2>
                    <form className="col-12 d-flex justify-content-center">

                        <div className="contenedor-desplegable text-center col-2">
                            <p>Categorias</p>
                            <select className="desplegable" onChange={this.cambiarCategoria}>

                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                                
                            </select>
                        </div>

                        {/* Idioma Paises Noticias */}

                        <div className="contenedor-desplegable text-center col-2">
                            <p>Pais</p>
                            <select className="desplegable" onChange={this.cambiarCategoria}>

                                <option value="mx">Mexico</option>
                                <option value="ae">Emiratos Árabes Unidos</option>
                                <option value="ar">Argentina</option>
                                <option value="at">Austria</option>
                                <option value="au">Australia</option>
                                <option value="be">Bélgica</option>
                                <option value="bg">Bulgaria</option>
                                <option value="br">Brasil</option>
                                <option value="ca">Canadá</option>
                                <option value="ch">Suiza</option>
                                <option value="cn">China</option>
                                <option value="co">Colombia</option>
                                <option value="cu">Cuba</option>
                                <option value="cz">República Checa</option>
                                <option value="de">Alemania</option>
                                
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            
        );


    }
}

Formulario.propTypes = {

    consultarNoticias : PropTypes.func.isRequired

}
export default Formulario;
