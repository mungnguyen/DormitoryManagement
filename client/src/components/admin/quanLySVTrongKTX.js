import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import SinhVienList from './quanLySVTrongKTX/sinhVienList';
import '../../style/khuNha.css'

export default class QuanLySVTrongKTX extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <SinhVienList />
                    </div>
                </div>
            </div> 
        );
    }
}