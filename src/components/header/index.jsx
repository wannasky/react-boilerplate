import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'components/header/nav';
import 'components/header/index.scss';

@connect(
    state => ({
        header: state.header
    })
)
export default class Header extends Component {

    render() {
        let {header} = this.props;

        return (
            <div className="header">
                {header.nav ? <Nav/> : null}
                <h1>{header.title}</h1>
            </div>
        )
    }
}