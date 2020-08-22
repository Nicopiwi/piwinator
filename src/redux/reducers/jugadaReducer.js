const initialState = {
    eligeTema:false,
    preguntas:15,
    arriesgar:2,
    categoria:'',
    adivinar:'',
    score:0,
    estado:0 //0 -> No terminó, 1->Ganó, 2->Perdió
};

export default function(state = initialState, action) {
    switch (action.type) {

        case 'CREATE_JUGADA':
            return action.payload==='TEMA'?{
                ...state,
                eligeTema:true,
                preguntas:10,
                arriesgar:1,
                estado:0 
            }:{
                ...state,
                eligeTema:false,
                preguntas:15,
                arriesgar:2,
                estado:0 
            };

        case 'ASIGNAR_TEMA':
            return {
                ...state,
                categoria:action.payload
            }
        case 'SUMAR_PREGUNTA':
            return {
                ...state,
                preguntas:action.payload
            }
        case 'SUMAR_ARRIESGUE':
            return {
                ...state,
                arriesgar:action.payload
            }
        case 'TERMINAR':{
            return {
                ...state,
                estado:action.payload
            }
        }
        case 'SET_SCORE':{
            return {
                ...state,
                score:action.payload
            }
        }
        default:
            return state;
    }
}