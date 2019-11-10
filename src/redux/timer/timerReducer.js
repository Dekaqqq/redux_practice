import { combineReducers } from 'redux';
import { Type } from './timerActions';

// const initialState = {
//     value: 0,
//     step: {
//         value: 5,
//         label: 5,
//     },
// };

const valueReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case Type.INCREMENT:
            return state + payload;
        case Type.DECREMENT:
            return state - payload;
        default:
            return state;
    }
};

const stepReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case Type.CHANGE_STEP:
            return payload;
        default:
            return state;
    }
};

// const timerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Type.INCREMENT:
//             return { ...state, value: state.value + action.payload };
//         case Type.DECREMENT:
//             return { ...state, value: state.value - action.payload };
//         case Type.CHANGE_STEP:
//             return { ...state, step: action.payload };
//         default:
//             return state;
//     }
// };

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});
