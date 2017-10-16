import React, {Component} from 'react';
import 'views/home/components/list/index.scss';

export default class List extends Component {

    render() {
        let {list,onclick} = this.props;
        return (
            <div className="volunteer-list">
                {
                    list.map((item, index) => {
                        return (
                            <div className="vl-box" key={index}>
                                <p>{item.date}</p>
                                <div className="vl-list">
                                    <ul className="vl-title">
                                        <li>航班号</li>
                                        <li>自愿者人数</li>
                                        <li>计划时间</li>
                                    </ul>
                                    <ul className="vl-content">
                                        {
                                            item.data.map((volunteer, vindex) => {
                                               return (
                                                   <li onClick={onclick.bind(this,volunteer)} key={vindex}>
                                                       <span>{volunteer.flight}</span>
                                                       <span>{volunteer.count}</span>
                                                       <span>{volunteer.std}</span>
                                                   </li>
                                               )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}