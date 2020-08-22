import { combineReducers } from 'redux';
import highscoreReducer from './highscoreReducer'
import jugadaReducer from './jugadaReducer'

export default combineReducers({
    highscore: highscoreReducer,
    jugada: jugadaReducer
});