import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setHeader} from 'actions/header';
import * as detailActions from 'actions/detail';
import List from 'views/detail/components/list';
import Db from 'views/detail/components/db';
import 'views/detail/index.scss';

@withRouter
@connect(
    state => ({
        header: state.header,
        detail: state.detail
    }),
    dispatch => bindActionCreators({setHeader,...detailActions}, dispatch)
)
export default class Detail extends Component {
    constructor(props){
        super(props);
        this.itemClick = this.itemClick.bind(this);
        this.choose = this.choose.bind(this);
    }

    componentWillMount(){
        let params = this.props.match.params;
        let {setHeader,getUserInfo,getDbInfo} = this.props;
        getDbInfo(params.id);
        let promise = getUserInfo(params.id);
        promise.then(function (data) {
            setHeader({
                nav: true,
                date: false,
                title: data.flight
            });
        });
    }

    itemClick(etkt) {
        this.props.showModal(etkt);
    }

    choose(etkt) {
        this.props.hideModal();
    }

    render() {
        let {list,db, modal} = this.props.detail;
        return (
            <div>
                <List list={list} onclick={this.itemClick}/>
                <Db db={db} open={modal} onChoose={this.choose}/>
            </div>
        )
    }
}