const initialState = {
    name: '',
    income: 0
};


const IncomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INCOME':
            return {
                ...state,
                income: action.payload
            }
        default:
            return state
    }
}

export default IncomeReducer;