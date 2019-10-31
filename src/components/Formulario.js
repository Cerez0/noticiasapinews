import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {
        categoria : 'General'
    }

    cambiarCategoria = e => {

        this.setState({
            categoria : e.target.value
        }, ()=> {

            // pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria);
        });

        

    }

    render() {

        return(
            <div className="col-12 justify-content-center">
                <div className="contenedor-desplegable row">
                    <form>
                        <h2 className="titulo2 text-primary">Encuentra Noticias por Categoria</h2>

                        <div className="contenedor-desplegable">
                            <select className="desplegable" onChange={this.cambiarCategoria}>

                                <option value="general" className="">General</option>
                                <option value="business" className="">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                                
                            </select>
                            <i></i>
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
