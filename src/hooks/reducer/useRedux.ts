import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '@/reducer/store/types'

const useRedux = <TReducer extends keyof RootReducer>(reducerName: TReducer) => {
  const reducer = useSelector((state: RootReducer) => state[reducerName])
  
  const dispatch = useDispatch()

  return [reducer, dispatch] as const
}

export default useRedux