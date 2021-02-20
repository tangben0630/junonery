import { createStore } from 'redux'
// import { reducer } from './reducer'
import { lanReducer } from './lanReducer'
const store = createStore(lanReducer)

export default store