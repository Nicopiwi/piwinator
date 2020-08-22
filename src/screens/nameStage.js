import React, { useEffect, useState } from 'react';
import '../App.css';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import Adivinar from '../adivinar'
import { setCategory } from '../redux/actions/jugadaActions'
import { guardar } from '../redux/actions/highscoreActions'
import TextField from '@material-ui/core/TextField';

function NameStage(props) {
  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')
  const score = useSelector(state => state.jugada.score)
  function enter(){
    dispatch(guardar(playerName, score))
    props.history.push('/highscore')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{'width':'400px', 'height':'300px', 'border':'solid 2px cyan', 'borderRadius':'5px', 'padding':'30px'}}>
          <h2 style={{'color':'cyan'}}>Nombre del ganador</h2>
          <div>
          <input value={playerName} onChange={(e)=>setPlayerName(e.target.value)} type="text" style={{'width':'300px', 'height':'30px', 'marginBottom':'30px'}}></input></div>
          <a
                className="App-link"
                rel="noopener noreferrer"
                onClick={()=>enter()}
          >Entrar</a>
        </div>
      </header>
    </div>
  );
}

export default NameStage;