import { combineReducers } from "@reduxjs/toolkit"
import  IncomeReducer  from './IncomeReducer'
import  NameReducer  from "./NameReducer"
import ExpensesReducer from "./ExpenseReducer"

export const rootReducer = combineReducers({
    name: NameReducer,
    income: IncomeReducer,
    expenses: ExpensesReducer,
})
