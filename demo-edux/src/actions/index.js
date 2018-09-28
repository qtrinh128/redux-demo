import * as types from './../contants/ActionTypes';


export const addName = (arrName)=>{
    return {
        type: types.ADD_NAME,
        arrName
    }
}


export const updateName = (arrName)=>{
    return {
        type: types.UPDATE_NAME,
        arrName
    }
}

export const deleteName = (deleteIndex)=>{
    return {
        type: types.DELETE_NAME,
        deleteIndex
        
    }
}

export const togleEdit = (updateIndex, updateText)=>{
    return {
        type: types.TOGLE_EDIT,
        updateIndex,
        updateText
    }
}