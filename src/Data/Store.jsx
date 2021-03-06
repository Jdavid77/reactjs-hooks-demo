import React, { useState } from "react";
import App from "../views/App";

const initialState = {
    number: 1234,
    text: "Context API + Hooks"
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key,newValue){
        setState({
            ...state,
            [key] : newValue
        })
    }


    return (

        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number',n),
            setText: t => updateState('text',t)
        }}>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
        
    )
}

export default Store