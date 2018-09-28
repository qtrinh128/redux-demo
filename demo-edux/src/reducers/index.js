import {combineReducers} from 'redux'
import ControlReducer from './ControlReducer';
import ShowHideEdit from './ShowHideEdit';

const indexReducers = combineReducers({
    ControlReducer,
    ShowHideEdit
});

export default indexReducers;