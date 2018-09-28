import * as types from './../contants/ActionTypes';

let initialState = {
    arrName:[]
}

const ControlReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.ADD_NAME:
            state.arrName = action.arrName;             
            return {...state};

        case types.UPDATE_NAME:
            state.arrName = action.arrName
            return {...state}

        case types.DELETE_NAME:
        
            let arrName = state.arrName;
            arrName.splice(action.deleteIndex, 1);
            state.arrName = arrName;
            return {...state}

        default: return state;
            
    }
}

export default ControlReducer;