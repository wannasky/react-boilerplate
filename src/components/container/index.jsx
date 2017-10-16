import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Home from 'views/home';
import Detail from 'views/detail';
import 'components/container/index.scss';

@withRouter
export default class Container extends Component {

    render() {

        const routeWrap = Comp => (
            () => (
                <div className="container-wrap">
                    <div className="container-scoll">
                        <Comp/>
                    </div>
                </div>
            )
        )

        return (
            <div className="container">
                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                <Route exact path="/home" render={routeWrap(Home)}/>
                <Route path="/home/:id" render={routeWrap(Detail)}/>
            </div>
        )
    }
}