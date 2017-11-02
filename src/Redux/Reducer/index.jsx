import {Increment, Decrement} from "../Action/index"

const state = {
    count: 0
}
export default action => {
    switch (action.type) {
        case Increment:
            return state.count + 1
        case Decrement:
            return state.count - 1
        default:
            return state
    }
}

// export default (state, action) => {
//     const {counterCaption} = action
//     switch (action.type) {
//         case Increment:
//             return {
//                 ...state, [counterCaption]: state[counterCaption] + 1
//             }
//         case Decrement:
//             return {
//                 ...state, [counterCaption]: state[counterCaption] - 1
//             }
//         default:
//             return state
//     }
// }