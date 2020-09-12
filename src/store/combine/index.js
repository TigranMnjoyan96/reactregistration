import { combineReducers } from 'redux'
import { card, date, email } from '../reducers'


export default combineReducers({
    card,
    date,
    email
})