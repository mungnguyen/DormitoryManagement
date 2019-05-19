import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../style/menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="col-md-3 menu" style={{ padding: "0" }}>
                <div className="menu1">

                    <Link to="/admin/home">
                        <div className="menu_item">
                            <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý khu nhà</span>
                        </div>
                    </Link>

                    <Link to="/admin/quan-ly-phong">
                        <div className="menu_item">
                            <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý phòng</span>
                        </div>
                    </Link>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý sinh viên</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý điện nước</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý cơ sở vật chất</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon"></i><span className="menu_content">Quản lý thu chi</span>
                    </div>
                </div>
            </div>
        );
    }
}