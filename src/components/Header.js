import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (

    <nav className="nav-wrapper light-blue darken-3">

        <a href="http://localhost:3000" className="brand-logo center"> <center>{titulo}</center></a>

    </nav>

);

Header.propTypes = {

    titulo : PropTypes.string.isRequired
}

export default Header;