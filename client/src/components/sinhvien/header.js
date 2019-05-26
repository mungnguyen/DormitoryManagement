import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import dormitory from '../../images/sinhvien/dormitory.jpg';

class Header extends Component {

    signOut = () => {
        localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="row">
                <div style={{ marginLeft: "30em", display: "block", clear: "both" }}>
                    <img src={dormitory} alt="dormitory_icon" style={{ height: "3em", width: "3em", marginLeft: "1.2em" }}></img>
                    <br />
                    <b>KTX - HUST</b>
                </div>
                <div style={{marginTop: "3em", marginLeft: "16em"}}>
                    <span className="name">
                    <i className="fas fa-user"></i> {localStorage.getItem('tenSinhVien')}
                    </span>
                    <span className="name" style={{ marginLeft: "2em"}} onClick={this.signOut}>
                    <i className="fas fa-sign-out-alt name"></i> Đăng xuất
                    </span>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);