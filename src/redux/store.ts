import { createStore, combineReducers } from 'redux'
import { lanReducer } from './lanReducer'
import { RecommondRedux } from './recommondProd/recommondProdRedux'
import { otherFn } from './otheRedux/index'

const rootReducer = combineReducers({
  language: lanReducer,
  recommondProd: RecommondRedux,
  otherFn
})
const store = createStore(rootReducer)

export default store