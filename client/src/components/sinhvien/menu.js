import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap'
import '../../style/menusv.css';

export default class MenuSinhVien extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickQLDK: false,
            clickDVHT: false
        }
    }

    clickQLDK = () => {
        this.setState({
            clickQLDK: !this.state.clickQLDK,
            clickDVHT: false
        })
    }

    clickDVHT = () => {
        this.setState({
            clickDVHT: !this.state.clickDVHT,
            clickQLDK: false
        })
    }

    render() {
        return (
            <div className="col-md-2 menu-sinhvien">
                <div className="menu-sinhvien-icon">
                    <i className="fas fa-user-graduate"></i>
                    <i className="fas fa-user-graduate" style={{ fontSize: "48px" }}></i>
                    <i className="fas fa-user-graduate"></i>
                </div>

                <div className="menu-sinhvien-item" onClick={this.clickQLDK} style={{ cursor:"pointer"}}>
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-home"></i>
                        <span>  Quản lý đăng kí</span>
                        {!this.state.clickQLDK ?
                            <i className="fas fa-chevron-right" style={{ marginLeft: "4em" }}></i>
                            :
                            <i className="fas fa-chevron-down" style={{ marginLeft: "4em" }}></i>
                        }
                    </div>
                </div>

                <Collapse isOpen={this.state.clickQLDK}>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Xem phòng trống</span>
                        </div>
                    </div>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Quản lý đơn đăng kí</span>
                        </div>
                    </div>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Danh sách bạn cùng phòng</span>
                        </div>
                    </div>
                </Collapse>

                <div className="menu-sinhvien-item" onClick={this.clickDVHT}>
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-map-pin"></i>
                        <span>  Dịch vụ hỗ trợ</span>
                        {!this.state.clickDVHT ?
                            <i className="fas fa-chevron-right" style={{ marginLeft: "5.2em" }}></i>
                            :
                            <i className="fas fa-chevron-down" style={{ marginLeft: "5.2em" }}></i>
                        }
                    </div>
                </div>

                <Collapse isOpen={this.state.clickDVHT}>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Tiệm giặt là</span>
                        </div>
                    </div>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Phòng tự học chung</span>
                        </div>
                    </div>
                    <div className="menu-sinhvien-subitem">
                        <div className="menu-sinhvien-content">
                            <i className="far fa-circle" style={{ fontSize: "0.3em" }}></i>
                            <span>  Thi giấy phép lái xe</span>
                        </div>
                    </div>
                </Collapse>


                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-question-circle"></i>
                        <span>  Hỗ trợ, phản ánh</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-user-friends"></i>
                        <span>  Cán bộ </span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-book"></i>
                        <span>  Tài liệu học tập</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="far fa-address-card"></i>
                        <span>  Thanh toán</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="fas fa-clipboard-list"></i>
                        <span>  Ghi chú</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="far fa-envelope"></i>
                        <span>  Tin nhắn</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item">
                    <div className="menu-sinhvien-content">
                        <i className="far fa-user-circle"></i>
                        <span>  Tài khoản</span>
                    </div>
                </div>

                <div className="menu-sinhvien-item" style={{ height: "30%" }}>

                </div>
            </div>
        )
    }
}