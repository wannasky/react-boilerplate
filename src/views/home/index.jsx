import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {setHeader} from 'actions/header';
import * as homeActions from 'actions/home';
import 'views/home/index.scss';

@withRouter
@connect(
    state => ({
        header: state.header,
        home: state.home
    }),
    dispatch => bindActionCreators({setHeader,...homeActions}, dispatch)
)
export default class Home extends Component {

    componentWillMount() {
        this.props.setHeader({
            nav: false,
            title: 'HOME'
        });
    }

    render() {

        return (
           <div>
                home page
           </div>
        )
    }
}