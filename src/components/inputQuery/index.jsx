import React,{Component} from 'react';
import 'components/inputQuery/index.scss';

export default class InputQuery extends Component {

    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            value: ''
        }
    }

    change(e){
        this.setState({
            value: e.target.value
        });
    }

    search() {
        let {onSearch} = this.props;
        if(onSearch) onSearch(this.state.value);
    }

    render() {

        let {placeholder} = this.props;

        return (
            <div className="input-query">
                <input type="text" defaultValue={this.state.value} onChange={this.change} placeholder={placeholder}/>
                <button onClick={this.search}>查询</button>
            </div>
        )
    }
}