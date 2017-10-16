import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import PageScroll from 'cking-react-page-scroll';
import InputQuery from 'components/inputQuery';
import List from 'views/home/components/list';
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
        this.detail = this.detail.bind(this);
        this.props.setHeader({
            nav: false,
            title: '自愿候补旅客查询',
            date: false
        });
    }

    componentDidMount() {
        this.props.getWaitInfo();
    }

    pullDownRefresh(complete) {
        setTimeout(function () {
            complete();
        },1000)
    }

    search(keyword) {
        console.log(keyword);
    }

    detail(volunteer) {
        this.props.history.push('/home/'+volunteer.id);
    }

    render() {

        let {list} = this.props.home;

        return (
            <PageScroll
                onPullDownRefresh={this.pullDownRefresh}>
                <div className="view-home">
                    <InputQuery placeholder="输入航班" onSearch={this.search}/>
                    <List list={list} onclick={this.detail}/>
                </div>
            </PageScroll>
        )
    }
}