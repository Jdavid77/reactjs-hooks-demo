import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from "../../store"

const UseReducer = (props) => {

    const [state, exec] = useReducer(reducer,initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span>}
                <span className="text"></span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => exec({type : "login",name: "Maria"})}>Login</button>
                    <button className="btn" onClick={() => exec({type : "number_Add2"})}>+2</button>
                    <button className="btn" onClick={() => exec({type : "multiply7"})}>*7</button>
                    <button className="btn" onClick={() => exec({type : "divide25"})}>/25</button>
                    <button className="btn" onClick={() => exec({type : "Addn", n: 3})}>+n</button>
                    <button className="btn" onClick={() => exec({type : "Parse"})}>Parse</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
