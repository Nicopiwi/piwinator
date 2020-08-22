import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { useSelector, useDispatch } from 'react-redux'
import AppInicio from './AppInicio'
import CategoriaStage from './screens/categoriaStage'
import HighscoreStage from './screens/highscoreStage'
import JugadaStage from './screens/jugadaStage'
import NameStage from './screens/nameStage'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router>
            <div>
                <Route exact path="/" component={AppInicio}/>
                <Route exact path="/categoria" component={CategoriaStage}/>
                <Route exact path="/jugada" component={JugadaStage}/>
                <Route exact path="/name" component={NameStage}/>
                <Route exact path="/highscore" component={HighscoreStage}/>
            </div>
          </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;