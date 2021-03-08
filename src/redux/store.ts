import { createStore, combineReducers } from 'redux'
import { lanReducer } from './lanReducer'
import { RecommondRedux } from './recommondProd/recommondProdRedux'
import { otherFn } from './otheRedux/index'
import { ListReducer } from './list/listReducer'

const rootReducer = combineReducers({
  language: lanReducer,
  recommondProd: RecommondRedux,
  otherFn, ListReducer
})
const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export default store