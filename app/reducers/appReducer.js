
const appReducer = (state = {photo: ''}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'THING_CLICK':
            newState.photo = action.input;
            return newState;
        default:
            return state;
    }
};

export default appReducer;
