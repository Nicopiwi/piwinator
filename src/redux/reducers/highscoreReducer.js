const initialState = {
    jugadas: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case 'ADD_JUGADA':{
            return {
                ...state,
                jugadas: [...state.jugadas, action.payload]
            }
        }
        case 'DELETE_ALL':{
            return {
                ...state,
                jugadas: []
            }
        }
        default:
            return state;
    }
}