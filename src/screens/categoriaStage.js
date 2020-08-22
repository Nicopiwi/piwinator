import React, { useEffect, useState } from 'react';
import '../App.css';
import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import Adivinar from '../adivinar'
import { setCategory } from '../redux/actions/jugadaActions'

function CategoriaStage(props) {
  const dispatch = useDispatch()
  const eligeTema = useSelector(state => state.jugada.eligeTema);
  const [randomCat, setRandomCat] = useState(Object.keys(Adivinar)[0])
  const [seenCat, setSeenCat] = useState(false)
  function setCat(cat){
      dispatch(setCategory(cat))
      props.history.push('/jugada')
  }

  useEffect(()=>{
    const idx = Math.floor(Math.random() * 6)
    setRandomCat(Object.keys(Adivinar)[idx])
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {eligeTema?(
            <div style={{'display':'flex', 'flex-wrap':'wrap', 'marginLeft':'100px'}}>
                {Object.keys(Adivinar).map(cat=>(
                    <div className="scene scene--card">
                        <div onClick={()=>{setCat(cat)}} class="card">
                            <div className="card__face card__face--front">{cat}</div>
                        </div>
                    </div>)
                )}
            </div>
        ):(<React.Fragment>
                <div className="scene scene--card scene-animation">
                        <div onClick={()=>setSeenCat(true)} class={"card " + (seenCat && 'is-flipped')}>
                            <div class="card__face card__face--front">X</div>
                            <div class="card__face card__face--back">{randomCat}</div>
                            
                        </div>
                        
                    </div>
                    {seenCat&&(
                    <a
                            className="App-link"
                            style={{'justifyContent':'space-evenly'}}
                            rel="noopener noreferrer"
                            onClick={()=>setCat(randomCat)}
                        >
                            Comenzar
                        </a>)}
        </React.Fragment>)}
      </header>
    </div>
  );
}

export default CategoriaStage;