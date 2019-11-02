import React, {Component, Fragment} from 'react';
import Header from '../src/components/Header';
import ListaNoticias from '../src/components/ListaNoticias';
import Formulario from '../src/components/Formulario';

class App extends Component {

  state = { 
    noticias : []
  }

  async componentDidMount(){
    this.consultarNoticias()
  }

  consultarNoticias = async (categoria ='general', pais ='mx') => {
    console.log(` en la pagina App ${pais}`);
    console.log(` en la pagina App ${categoria}`);
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=b9722d799b54437382db68617d2d3bd7`
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    

    this.setState({
      noticias :  noticias.articles
    })

  }


  render() {
    return ( 
      <Fragment>
        <Header 
          titulo = 'Noticias API News'
        />
        <div className="container">
          <div className="row">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />
          </div>
        </div>

        <div className="container">
              <ListaNoticias
                noticias = {this.state.noticias}
              />
            
          <div>
            <a href="https://newsapi.org/">News API</a>
          </div>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
