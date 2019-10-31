import React from 'react';
import PropTypes from 'prop-types';


const Header = ({titulo}) => (

    <div className="container-fluid bg-primary contenedor-titulo">
        <nav className="text-center">

            <a href="http://localhost:3000" className="titulo"><h1>{titulo}</h1></a>

        </nav>
    </div>

);

Header.propTypes = {

    titulo : PropTypes.string.isRequired
}

export default Header;