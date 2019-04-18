import React, { Component } from 'react';
import '../../style/menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="col-md-3" style={{ padding: "0"}}>
                <div className="menu">
                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon" style={{ cursor: "pointer", fontSize: "28px"}}></i><span className="menu_content">Quản lý phòng</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon" style={{ cursor: "pointer", fontSize: "28px"}}></i><span className="menu_content">Quản lý sinh viên</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon" style={{ cursor: "pointer", fontSize: "28px"}}></i><span className="menu_content">Quản lý điện nước</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon" style={{ cursor: "pointer", fontSize: "28px"}}></i><span className="menu_content">Quản lý cơ sở vật chất</span>
                    </div>

                    <div className="menu_item">
                        <i className="far fa-arrow-alt-circle-right menu_icon" style={{ cursor: "pointer", fontSize: "28px"}}></i><span className="menu_content">Quản lý thu chi</span>
                    </div>
                </div>
            </div> 
        );
    }
}