import React, { Component } from 'react';
import {connect} from 'react-redux';
import KNList  from './KNList';
import {hienThiCacKhuNha as hienThiCacKhuNha} from '../../../actions/khuNhaActions';

class DanhSachKhuNha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            KhuNhas: []
        }
    }
    
    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
    }

    

    render() {
        return (
         <KNList khunhas={this.props.khuNhaListReducer.KhuNhas} />
        );
    }
}

const mapStatetoProps = state => ({
    khuNhaListReducer: state.khuNhaListReducer
})
export default connect(mapStatetoProps, {hienThiCacKhuNha} )(DanhSachKhuNha)