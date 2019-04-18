import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import DanhSachKhuNha from './khuNha/danhSachKhuNha';
import ThemKhuNha from './khuNha/themKhuNha';

export default class AdminHome extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9">
                        <div className="row">
                            <DanhSachKhuNha />
                            <ThemKhuNha />
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}