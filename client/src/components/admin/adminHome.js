import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import DanhSachKhuNha from './khuNha/danhSachKhuNha';
import ThemKhuNha from './khuNha/themKhuNha';

export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    themKhuNha = (tenKhuNha) => {
        this.child.current.props.themKhuNha(tenKhuNha);
    }
 
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />

                    <div className="col-md-9">
                        <div className="row">
                            <DanhSachKhuNha ref={this.child}/>
                            <ThemKhuNha themKhuNha={this.themKhuNha}/>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}