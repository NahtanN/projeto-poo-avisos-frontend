import { useContext } from "react"
import { WarningContext } from "../components/warningsLayout/WarningsLayout"
import { v4 as uuid } from 'uuid'

export const useWarning = () => {

    const dispatch = useContext(WarningContext)
  
    return ({ ...props }) => {
  
      dispatch({
        type: 'ADD_WARNING',
        payload: {
          id: uuid(),
          type: props.type,
          message: props.message
        }
      })
  
    }
  
  }