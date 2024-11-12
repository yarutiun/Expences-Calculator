const initialState = {
    name: '',
    income: 0,
    expenses: []
};


const ExpensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default:
            return state
    }
}

export default ExpensesReducer;