import img from 'file-loader!../img/IMG_8019.JPG';
console.log(img);

const appReducer = (state = {img: ' '}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'BUTTON_CLICK':
            console.log(img);
            newState.img = img;
            return newState;
        default:
            return state;
    }
};

export default appReducer;
