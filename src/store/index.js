import { createStore } from 'redux'

const initialState = {
    authenticated: true
}

const reducer = (state = initialState, action) => {
    console.log('reducer: ', action);

    switch (action.type) {
        case "AUTH":
            console.log(!state.authenticated);
            return Object.assign({}, state, { authenticated: !state.authenticated });
    }


    return state;
}

const store = createStore(reducer);

export default store;