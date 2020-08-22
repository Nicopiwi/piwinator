import React from 'react';
import logo from './piwineitorLogo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { empezarPartida } from './redux/actions/jugadaActions'
import './App.css';


function AppInicio(props) {
  const dispatch = useDispatch();

  function start(tema){
    dispatch(empezarPartida(tema))
    props.history.push('/categoria')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{'display':'flex', 'marginTop':'50px', 'justifyContent':'space-evenly', 'width':'500px'}}>
          <a
            className="App-link"
            style={{'justifyContent':'space-evenly'}}
            rel="noopener noreferrer"
            onClick={()=>start('TEMA')}
          >
            Elegís categoría
          </a>
          <a
            className="App-link"
            style={{'justifyContent':'space-evenly'}}
            rel="noopener noreferrer"
            onClick={()=>start('NO_TEMA')}
          >
            No elegís categoría
          </a>
        </div>
        
      </header>
    </div>
  );
}

export default AppInicio;
