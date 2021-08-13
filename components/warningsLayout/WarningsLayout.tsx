import { createContext, useReducer, ReactChild, Dispatch, SetStateAction } from "react"
import styles from './WarningsLayout.module.css'
import { Warning } from '../warning/Warning'

interface IWarningsProvider {
  children: ReactChild | ReactChild[];
}

interface IPayload {
  id: string;
  type: string;
  message: string;
}

interface IAction {
  type: string;
  id?: string;
  payload: IPayload;
}

export const WarningContext = createContext<any>((defaultValue: any) => {})

// Layout que fica responsável por criar os Warnings no topo ta tela
const WarningsLayout = ({ children }: IWarningsProvider) => {

  const reducerFunc = (state: IPayload[], action: IAction) => {

    switch (action.type) {
  
      case 'ADD_WARNING':
        return [...state, { ...action.payload }]
      case 'REMOVE_WARNING':
        return state.filter(element => element.id !== action.id)
      default:
        return state
  
    }
  
  }

  const initializerArg: IPayload[] = []
  const [state, dispatch] = useReducer(reducerFunc, initializerArg)

  return (
    <WarningContext.Provider
      value={dispatch}
    >

      <div className={styles.warningWrapper}>
        {
          state.map(warning => {
            return <Warning key={warning.id} dispatch={dispatch} {...warning}/>
          })
        }
      </div>

      {
        children
      }

    </WarningContext.Provider>
  )

}

export { WarningsLayout }