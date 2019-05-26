import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import DonDangKiList from './quanLyDonDangKi/donDangKiList';
import '../../style/khuNha.css'

export default class QuanLyDonDangKi extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <DonDangKiList />
                    </div>
                </div>
            </div> 
        );
    }
}