import React, { Component } from 'react';
import logoAdmin from '../../images/admin/admin_header_icon.png';
import '../../style/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="row header">
                <div className="col-md-3" style={{ marginTop: "5px"}}>
                    <center>
                        <img src={logoAdmin} className="logoAdmin" alt="ADMIN" />
                        <b className="content"> ADMIN</b>
                    </center>
                </div>
                
    
                <div className="col-md-6">
                    <div className="row searchbar">
                        <div className="col-md-11">
                            <form>
                            <input className="search_input" type="text" name="" placeholder="Search..." />  

                            </form>
                        </div>

                        <div className="col-md-1">
                        <a href="#" className="search_icon"><i className="fas fa-search" style={{ cursor: "pointer", fontSize: "20px"}}></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                <i className="fas fa-user-tie user-icon"></i>
                </div>
            </div>
        );
    }
}