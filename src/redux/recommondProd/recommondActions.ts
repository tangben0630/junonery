export const START = 'START'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

interface Start {
  type: typeof START
}

interface Success {
  type: typeof SUCCESS,
  payload: any
}
interface Fail {
  type: typeof FAIL,
  payload: any
}

export type RecommondActions = Start | Success | Fail

export const startFn = (): Start => {
  return {
    type: START
  }
}
export const successFn = (data): Success => {
  return {
    type: SUCCESS,
    payload: data
  }
}
export const failFn = (err): Fail => {
  return {
    type: FAIL,
    payload: err
  }
}

