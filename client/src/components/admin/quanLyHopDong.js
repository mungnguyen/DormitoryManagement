import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import HopDongList from './quanLyHopDong/hopDongList';
import '../../style/khuNha.css'

export default class quanLyHopDong extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <HopDongList />
                    </div>
                </div>
            </div> 
        );
    }
}