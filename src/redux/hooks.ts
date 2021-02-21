import { useSelector as useaaa, TypedUseSelectorHook } from 'react-redux'
import { LanState } from './lanReducer'

export const useSelector: TypedUseSelectorHook<LanState> = useaaa

