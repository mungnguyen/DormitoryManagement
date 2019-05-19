import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import KhuNhaList from './homePage/khuNhaList';
import '../../style/khuNha.css'

export default class AdminHome extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9 body-content">
                        <div className="row">
                            <KhuNhaList />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}