import React, { useState } from 'react'
import SectionTitle from "../../components/layout/SectionTitle"
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial")


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className='center'>
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                </div>

            </div>
            <SectionTitle title="Exercício #02"/>
        
            <input type="text" className="input" 
                value={name} onChange={e => setName(e.target.value)}/>
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState