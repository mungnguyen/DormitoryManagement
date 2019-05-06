import React, { Component } from 'react';
import {connect} from 'react-redux';
import KhuNha from './khuNha';
import {hienThiCacKhuNha, suaKhuNha, xoaKhuNha, themKhuNha} from '../../../actions/khuNhaActions';
import ThemKhuNha from './themKhuNha';

class DanhSachKhuNha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            KhuNhas: []
        }
    }
    
    componentDidMount = () => {
        console.log("Ahihi");
        this.props.hienThiCacKhuNha();
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps.khuNhaListReducer.KhuNhas);
        this.setState({
            KhuNhas: nextProps.khuNhaListReducer.KhuNhas
        });
    }


    suaKhuNha = (khuNhaId, tenKhuNha) => {
        this.props.suaKhuNha(khuNhaId, tenKhuNha);
    }

    xoaKhuNha = (khuNhaId) => {
        this.props.xoaKhuNha(khuNhaId);
        console.log(this.props.khuNhaListReducer.KhuNhas)
        // this.setState({
        //     KhuNhas: this.props.khuNhaListReducer.KhuNhas
        // });
    }

    getAlert = () => {
        alert('getAlert from Child');
      }

    themKhuNhaMoi = (tenKhuNha) => {
        console.log(tenKhuNha);
        this.props.themKhuNha(tenKhuNha)
    }
    

    render() {
        console.log(this.props.khuNhaListReducer.KhuNhas);
        console.log(this.state.KhuNhas);
        return (
                this.state.KhuNhas.map(khunha => 
                <KhuNha 
                   tenKhuNha={khunha.tenKhuNha}
                   khuNhaId={khunha.khuNhaId}
                   suaKhuNha={this.suaKhuNha} 
                   xoaKhuNha={this.xoaKhuNha}
                 />
            )
        );
    }
}

const mapStatetoProps = state => ({
    khuNhaListReducer: state.khuNhaListReducer
})
export default connect(mapStatetoProps, {hienThiCacKhuNha, suaKhuNha, xoaKhuNha, themKhuNha})(DanhSachKhuNha)