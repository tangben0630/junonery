import { createStore, combineReducers, applyMiddleware } from 'redux'
import { lanReducer } from './lanReducer'
import { RecommondRedux } from './recommondProd/recommondProdRedux'
import { otherFn } from './otheRedux/index'
import { ListReducer } from './list/listReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog'

const rootReducer = combineReducers({
  language: lanReducer,
  recommondProd: RecommondRedux,
  otherFn, ListReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

export type RootState = ReturnType<typeof store.getState>

export default store