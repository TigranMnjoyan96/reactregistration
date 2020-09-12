import { createStore } from 'redux'
import combine from './combine'



export const store = createStore(combine)