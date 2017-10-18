import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
export default class Nav extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render(){
        return (
            <div onClick={this.goBack} className="navigation">

            </div>
        )
    }
}