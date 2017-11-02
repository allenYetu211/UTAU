// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import reducer from './Reducer'
// import thunk from 'redux-thunk';
//
// const store = createStore(
//     combineReducers(reducer),
//     applyMiddleware(thunk)
// )
//
// export default store

export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
