import { createContext, useReducer } from "react"
import Reducer from "./Reducer"



export const Formcontex=createContext()

const Contexapi=({children})=>{
    const [state , dispatch]=useReducer(Reducer,{name:"Liaqat",age:"29"})

    const adddata=(data)=>{
    
        dispatch({
            type:"Add",
            payload:data
        })
    }

    return(
        <Formcontex.Provider
        value={{
            formdata:state,
            adddata
        }}>
            {children}
        </Formcontex.Provider>
    )
}

export default Contexapi;