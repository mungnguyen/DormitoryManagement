import React, { Component } from 'react';
import MenuSinhVien from './menu';
import Header from './header';
import DanhSachPhongTrong from './quanLyDangKi/danhSachPhongTrong';


export default class SinhVienHome extends Component {
    render() {
        return (
            <div className="row">
                <MenuSinhVien />
                <div className="col-md-2" style={{ clear: "both"}}>
                </div>

                <div className="col-md-10" style={{ padding: "0"}}>
                    <Header />
                    <hr />
                    <DanhSachPhongTrong />
                </div>

            </div>
        )
    }
}