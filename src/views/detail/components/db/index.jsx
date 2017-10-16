import React,{Component} from 'react';
import Modal from 'react-modal';
import "views/detail/components/db/index.scss";

const customStyles = {
    overlay:{
        zIndex: '100',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        padding: '0',
        top:'50%',
        bottom: 'auto',
        width: '80%',
        left:'10%',
        right: '10%',
        maxHeight: '80%',
        transform:'translateY(-50%)',
        backgroundColor: '#f2f2f2'
    }
}

export default class Db extends Component{

    choose(){

    }

    render() {

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

        let {db,open,onChoose} = this.props;

        return (
                <Modal
                    isOpen={open}
                    style={customStyles}
                    contentLabel="DB user">
                    <ul className="db-user">
                        {
                            db.map((item,index) => {
                                return (
                                    <li key={index} onClick={onChoose.bind(this)}>
                                        <p>{item.tel}</p>
                                        <p>{getVip(item.vip)}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Modal>
        )
    }
}