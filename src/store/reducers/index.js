export default function reducer(state,action) {
    switch(action.type){
        case "number_Add2":
            return {...state, number: state.number+2}
        case "login":
            return { ...state, user: {name: action.name }}
        case "Parse":
            return {...state, number: parseInt(state.number)}
        case "multiply7":
            return {...state, number: state.number*7}
        case "Addn":
            return {...state, number: state.number + action.n}
        case "divide25":
            return {...state, number: state.number / 25}
        default:
            return state
    }

}