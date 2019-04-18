import React, { Component } from 'react';
import '../../../style/khuNha.css';
import '../../../style/style1.css';
import '../../../style/style_common.css';

export default class ThemKhuNha extends Component {
    render() {
        return (
                <div className="col-md-3">
                    <div className="khuNha_item view view-first">
                        <center className="themKhuNha">
                            <i className="fas fa-plus-circle" style={{ cursor: "pointer", fontSize: "28px", marginTop: "40px"}}></i>
                            <br />
                            Thêm khu nhà mới
                        </center>
                    </div>
                </div>
        );
    }
}