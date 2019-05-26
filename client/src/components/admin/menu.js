import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import '../../style/menu.css';
import '../../style/menusv.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickQLD: false
        }
    }

    clickQuanLyDon = () => {
        this.setState({
            clickQLD: !this.state.clickQLD
        })
    }

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


                    <div className="menu_item" onClick={this.clickQuanLyDon}>
                        <i className="far fa-arrow-alt-circle-right menu_icon"></i>
                        <span className="menu_content">Quản lý đơn</span>
                        {!this.state.clickQLD ?
                            <i className="fas fa-chevron-right" style={{ marginLeft: "5.2em" }}></i>
                            :
                            <i className="fas fa-chevron-down" style={{ marginLeft: "5.2em" }}></i>
                        }
                    </div>

                    <Collapse isOpen={this.state.clickQLD}>
                        <Link to="/admin/quan-ly-don-dang-ki">
                            <div className="menu-sinhvien-subitem">
                                <div className="menu-sinhvien-content">
                                    <i className="fas fa-circle" style={{ fontSize: "0.3em" }}></i>
                                    <span>  Đơn đăng kí</span>
                                </div>
                            </div>
                        </Link>
                        <div className="menu-sinhvien-subitem">
                            <div className="menu-sinhvien-content">
                                <i className="fas fa-circle" style={{ fontSize: "0.3em" }}></i>
                                <span>  Hợp đồng thuê phòng</span>
                            </div>
                        </div>
                    </Collapse>


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