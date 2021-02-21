import { createStore, combineReducers } from 'redux'
import { lanReducer } from './lanReducer'
import { RecommondRedux } from './recommondProd/recommondProdRedux'

const rootReducer = combineReducers({
  language: lanReducer,
  recommondProd: RecommondRedux
})
const store = createStore(rootReducer)

export default store