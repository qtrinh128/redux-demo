import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addName} from './../actions/index'


class Control extends Component {

    onThem = ()=>{
        let name = this.refs.name.value;
        let arrName = this.props.ControlReducer.arrName;
        arrName.push(name);
        this.props.addName(arrName);
    }

    render() {
        
        return (
            <React.Fragment>
                <input type="text" ref="name" />
                <input type="button" value="Them" onClick={this.onThem} />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        ControlReducer: state.ControlReducer
    }
}

const mapDispathToProps = (dispatch, props)=>{
    return {
        addName: (arrName)=>{
            dispatch(addName(arrName));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Control);
