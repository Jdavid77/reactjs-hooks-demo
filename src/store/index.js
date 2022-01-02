import reducer from "./reducers"
import { numberAddN2 } from "./actions/number"

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    numberAddN2,
    reducer,
    initialState
}

