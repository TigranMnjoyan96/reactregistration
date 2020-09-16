import { combineReducers } from 'redux'
import { card, date, email, user  } from '../reducers'


export default combineReducers({
    card,
    date,
    email,
    user
})