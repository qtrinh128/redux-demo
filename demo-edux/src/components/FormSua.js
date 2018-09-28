import React, { Component } from 'react';
import {connect} from 'react-redux';
import {togleEdit, updateName} from './../actions/index';

class FormSua extends Component {

    onOk = ()=>{
        let name = this.refs.name.value;
        let arrName = this.props.ControlReducer.arrName;
        arrName[this.props.ShowHideEdit.updateIndex] = name;
        this.props.updateName(arrName);
        this.props.togleEdit(null, null);

    }

    render() {
        let {ShowHideEdit} = this.props;
        return (
            <React.Fragment>
                <input type="text" ref="name" defaultValue={ShowHideEdit.updateText} />
                <input type="button" defaultValue="OK" onClick={this.onOk}  />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ShowHideEdit: state.ShowHideEdit,
        ControlReducer: state.ControlReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        togleEdit: (i, e)=>{
            dispatch(togleEdit(i, e))
        },
        updateName: (arrName)=>{
            dispatch(updateName(arrName));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FormSua);