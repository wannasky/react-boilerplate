import React, {Component} from 'react';
import Item from 'components/itemSwipe';
import 'views/detail/components/list/index.scss';

export default class List extends Component {

    render() {

        let {list,onclick} = this.props;
        list = list.data || [];

        function getVip(vip) {
            let str;
            switch (vip){
                case 0:
                    str = '';
                    break;
                case 1:
                    str = '普卡会员';
                    break;
                case 2:
                    str = '金卡会员';
                    break;
                case 3:
                    str = '白金卡会员';
                    break;
            }
            return str;
        }

        return (
            <div className="detail-list">
                {
                    list.map((item, index) => {
                        return (
                            <Item key={index}>
                                <div className="dl-box" onClick={onclick.bind(this,item.etkt)}>
                                    <p>{item.tel}</p>
                                    <p><span>{item.seat}</span><span>{item.baggage ? '有行李': '无行李'}</span><span>{getVip(item.vip)}</span></p>
                                    <p>ETKT {item.etkt}</p>
                                </div>
                            </Item>
                        )
                    })
                }
            </div>
        )
    }
}