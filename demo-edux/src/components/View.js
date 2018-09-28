import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import FormSua from './FormSua';

class View extends Component {

    constructor(props){
        super(props);
        this.onXoa = this.onXoa.bind(this);
        this.onSua = this.onSua.bind(this);
    }

    onXoa = (i)=>{        
        this.props.deleteName(i)
    }

    onSua = (i, e)=>{
        this.props.togleEdit(i, e);        
    };


    render() {
        
        let eLi = this.props.ControlReducer.arrName.map((e, i) => {
            return (
                <li key={i}>{e} 
                    <input type="button" defaultValue="Xoa" onClick={()=>this.onXoa(i)} />
                    <input type="button" defaultValue="Sua" onClick={()=>this.onSua(i, e)}/>
                </li>
            )
        });

        return (
            <React.Fragment>
                <ul>
                    {eLi}
                    <li>sadfsafdsaf</li>
                </ul>
                {this.props.ShowHideEdit.isEdit ? 
                <FormSua /> : ''}
                
            </React.Fragment>
        );
    }
}

const mapStateTopProps = state => {
    return {
        ControlReducer: state.ControlReducer,
        ShowHideEdit: state.ShowHideEdit
    }
}

const mapDispathToProps = (dispath, props)=>{
    return {
        deleteName: (i)=>{
            dispath(actions.deleteName(i));
        },
        togleEdit: (i , e)=>{
            dispath(actions.togleEdit(i, e));
        }
    }
}

export default connect(mapStateTopProps, mapDispathToProps)(View);
