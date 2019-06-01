import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import DienNuocList from './quanLyDienNuoc/DienNuocList';
import '../../style/khuNha.css'

export default class QuanLyDienNuoc extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <DienNuocList />
                    </div>
                </div>
            </div> 
        );
    }
}