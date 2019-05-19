import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import PhongList from './quanLyPhongPage/phongList';
import '../../style/khuNha.css'

export default class QuanLyPhong extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <PhongList />
                    </div>
                </div>
            </div> 
        );
    }
}