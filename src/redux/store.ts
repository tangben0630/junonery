import { createStore } from 'redux'
import { lanReducer } from './lanReducer'
const store = createStore(lanReducer)

export default store