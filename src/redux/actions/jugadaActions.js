export const empezarPartida = (tema) => dispatch => {
    dispatch({
        type: 'CREATE_JUGADA',
        payload: tema
    })
};

export const setCategory = (tema) => dispatch => {
    dispatch({
        type: 'ASIGNAR_TEMA',
        payload: tema
    })
};

export const preguntar = (preguntas) => dispatch => {
    if (preguntas > 0){
        dispatch({
            type: 'SUMAR_PREGUNTA',
            payload: preguntas-1
        })
    }
};

export const arriesgar = (arriesgue) => dispatch => {
    if (arriesgue > 1){
        dispatch({
            type: 'SUMAR_ARRIESGUE',
            payload: arriesgue-1
        })
    }
    else{
        dispatch({
            type: 'TERMINAR',
            payload: 2
        })
    }
};

export const ganar = () => dispatch => {
    dispatch({
        type: 'TERMINAR',
        payload: 1
    })
};

export const setPromedio = (mode, score, pregs) => dispatch => {
    console.log(score)
    if (mode){
        dispatch({
            type: 'SET_SCORE',
            payload: {score:(10-pregs)/10, avg:score/(11-pregs)}
        })
    }
    else{
        dispatch({
            type: 'SET_SCORE',
            payload: {score:(15-pregs)/15, avg:score/(16-pregs)}
        })
    }
    
};