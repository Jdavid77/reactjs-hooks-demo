import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n-1) * n
}

function defineStatus(num) {
    if(num % 2 == 0){
        return "Par"
    }
    else{
        return "Ímpar"
    }
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(0); 
    const [factorial, setFactorial] = useState(1);
    const [stat, setStat] = useState("Par")

    useEffect(function() {
        setFactorial(calcFactorial(number))
        setStat(defineStatus(number))
    },[number])



    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Não existe" : factorial}</span>
                </div>
                <input type="number" className="input"
                value={number} 
                onChange={ e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{stat}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
