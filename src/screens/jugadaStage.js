import React, { useState, useEffect } from 'react';
import '../App.css';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import { preguntar, arriesgar, ganar, setPromedio } from '../redux/actions/jugadaActions'
import Adivinar from '../adivinar'
import Stopwatch from '../components/stopwatch'
import ReactStopwatch from 'react-stopwatch';

function JugadaStage(props) {
  const [randomCard, setRandomCard] = useState(false)
  const [time, setTime] = useState(0)
  const [secs, setSecs] = useState(0)
  const [mins, setMins] = useState(0)
  const categoria = useSelector(state => state.jugada.categoria)
  const preguntas = useSelector(state => state.jugada.preguntas)
  const arriesgues = useSelector(state => state.jugada.arriesgar)
  const eligeTema = useSelector(state => state.jugada.eligeTema)
  const estado = useSelector(state => state.jugada.estado)
  const dispatch = useDispatch()
  const list_guess = Adivinar[categoria]

  useEffect(()=>{
    const idx = Math.floor(Math.random() * list_guess.length)
    setRandomCard(list_guess[idx])
    console.log('holaa')
    console.log(list_guess[idx])
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <ReactStopwatch
          seconds={secs}
          minutes={0}
          hours={0}
          onChange={({ hours, minutes, seconds }) => {
            setSecs(secs+1)
          }}
          onCallback={() => console.log('Finish')}
          render={({ formatted, hours, minutes, seconds }) => {
            return (
              <div></div>
            );
          }}
        />
        {/*<Stopwatch seconds={seconds} increaseSec={increaseSec}></Stopwatch>*/}
        <div class="scene scene--card scene-animation">
          <div onClick={()=>{
              if (estado === 0){
                dispatch(ganar())
              }
            }} class={"card " + ((estado != 0) && 'is-flipped')}>
              <div class="card__face card__face--front">X</div>
              <div class="card__face card__face--back">{randomCard}</div>   
          </div>                
        </div>
        <div style={{'display':'flex', 'marginTop':'50px', 'justifyContent':'space-evenly', 'width':'500px'}}>
          <a
            className="App-link"
            style={{'justifyContent':'space-evenly'}}
            rel="noopener noreferrer"
            onClick={()=>dispatch(preguntar(preguntas))}
          >
            Pregunta
          </a>
          <p style={{'justifyContent':'space-evenly'}}>{preguntas}</p>
          <a
            className="App-link"
            style={{'justifyContent':'space-evenly', 'backgroundColor':'red', 'color':'white'}}
            rel="noopener noreferrer"
            onClick={()=>dispatch(arriesgar(arriesgues))}
          >
            Arriesga
          </a>
          <p style={{'justifyContent':'space-evenly'}}>{arriesgues}</p>
          
        </div>
        <a
            className="App-link"
            style={{'justifyContent':'space-evenly'}}
            rel="noopener noreferrer"
            onClick={()=>{
              const idx = Math.floor(Math.random() * list_guess.length)
              setRandomCard(list_guess[idx])
              console.log('holaa otro')
              console.log(list_guess[idx])
            }}
          >
            Elegir otro
          </a>
        {estado === 1 &&(
            <p style={{'color':'green'}}>Ganaste!</p>
          )}
          {estado === 2 &&(
            <p style={{'color':'red'}}>Perdiste :(</p>
          )}
          {estado === 0 && preguntas == 1 &&(
            <p style={{'color':'red'}}>Última pregunta</p>
          )}
          {estado === 0 && preguntas == 0 &&(
            <p style={{'color':'red'}}>Ahora tenés que arriesgar</p>
          )}
          {
            (estado !== 0) &&(
              <a
                className="App-link"
                rel="noopener noreferrer"
                onClick={()=>{
                  if (estado == 2){
                    props.history.push('/')
                  }else{
                    dispatch(setPromedio(eligeTema, secs, preguntas))
                    props.history.push('/name')
                  }
                  
                }}
              >Terminar</a>
            )
          }
        
      </header>
    </div>
  );
}

export default JugadaStage;