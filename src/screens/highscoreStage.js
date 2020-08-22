import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import { deleteAll } from '../redux/actions/highscoreActions'


function HighscoreStage(props) {
  const dispatch = useDispatch()
  let scores = useSelector(state=>state.highscore.jugadas)
  useEffect(()=>{
    console.log(scores)
  }, [])

  function bubbleSort(arr) {
    if (arr.length>1) {
      for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i].score.score*arr[i].score.avg>arr[i+1].score.score*arr[i+1].score.avg) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
      }  
    }
        
    return arr;
}

  return (
    <div className="App">
      <header className="App-header">
        <div style={{'width':'500px'}}>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ganador</TableCell>
            <TableCell align="right">Puntaje negativo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         { bubbleSort(scores).map((score) => (
            <TableRow key={score.name}>
              <TableCell component="th" scope="row">
                {score.name}
              </TableCell>
          <TableCell align="right">{(score.score.score*score.score.avg).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer>
          </div>
          <a
                className="App-link"
                style={{'color':'red'}}
                rel="noopener noreferrer"
                onClick={()=>{
                    dispatch(deleteAll())  
                }}
              >Eliminar todos</a>
      <a
                className="App-link"
                rel="noopener noreferrer"
                onClick={()=>{
                    props.history.push('/')    
                }}
              >Salir</a>
            
      </header>
    </div>
  );
}

export default HighscoreStage;