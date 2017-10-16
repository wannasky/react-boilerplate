import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Wrapper from 'components/wrapper';
import Header from 'components/header';
import Container from 'components/container';
import 'app/index.scss';

export default class App extends Component {

    render() {
        return (
            <HashRouter>
                <Wrapper>
                    <Header/>
                    <Container/>
                </Wrapper>
            </HashRouter>
        )
    }
}