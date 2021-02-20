
interface LanState {
  language: string,
  languageList: { name: string, code: string }[]
}
const defaultState: LanState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: '英文', code: 'en' },
  ]
}

export const lanReducer = (state = defaultState, action) => {
  const newState = {
    ...state,
    nihao: ''
  }
  if (action.type === 'aaa') {

    newState.nihao = action.value
    console.log(newState, 'jinlaile');
    return newState
  }
  return state
}