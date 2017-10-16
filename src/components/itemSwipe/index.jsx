import React,{Component} from 'react';
import touch from 'cking-touch/touch';
import './index.scss';

export default class Item extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="cking-item-swipe">
                <div className="cis-operation">

                </div>
                <div ref="cisContent" className="cis-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}