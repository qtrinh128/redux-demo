import * as types from './../contants/ActionTypes';

let initialState = {
    isEdit: false,
    updateIndex: null,
    updateText: null
}

const ShowHideEdit = (state = initialState, action)=>{
    switch (action.type) {
        case types.TOGLE_EDIT:
            state.isEdit = !state.isEdit;
            state.updateIndex= action.updateIndex;
            state.updateText=action.updateText;
            return {...state}

        default: return state;
            
    }
}

export default ShowHideEdit;