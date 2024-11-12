const initialState = {
    name: '',
    income: 0
}


const NameReducer = (state = initialState, action) => {  // Access name initial state here
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
};

export default NameReducer;
