
import { combineReducers } from 'redux';

export interface State {
    toasts: any[];
}

export const initialState: State = {
    toasts: [],
};

export function reducer(
    state = initialState,
): State {
    return state;
}

export default combineReducers({
    toastReducer: reducer,
})
