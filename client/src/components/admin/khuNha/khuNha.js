import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import khuNha_icon from '../../../images/admin/khuNha_icon.png';
// import { suaKhuNha, xoaKhuNha } from '../../../actions/khuNhaActions';
import '../../../style/khuNha.css';
import '../../../style/style1.css';
import '../../../style/style_common.css';

export default class KhuNha extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            tenKhuNha: "",
            tenMoi: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            tenKhuNha: this.props.tenKhuNha
        });
    }

    clickEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    onChangeName = (event) => {
        this.setState({
            tenMoi: event.target.value
        })
    }

    handleChangeName = () => {
        this.props.suaKhuNha(this.props.khuNhaId, this.state.tenMoi);
    }

    handleDeleteKhuNha = () => {

        console.log(this.props.khuNhaId)
        this.props.xoaKhuNha(this.props.khuNhaId);
    }

    render() {
        return (
            <div className="col-md-3">
            { !this.state.isEditing ?
                <div className="khuNha_item view view-first" >
                    <img className="khuNhaImage" src={khuNha_icon} alt="KHUNHA" />
                    <center className="tenKhuNha"><b>{this.state.tenKhuNha}</b></center>
                    <div className="mask">
                        <Button outline color="primary" onClick=""><b>Danh sách phòng</b></Button>
                        <Button outline color="primary" onClick={this.clickEdit}><b>Chỉnh sửa</b></Button>
                        <Button outline color="primary" onClick={this.handleDeleteKhuNha}><b>Xóa</b></Button>
                    </div>
                
                </div>
                :
                <Form>
                    <FormGroup>
                        <Col sm="12" md={{ size: 12 }}>
                            <i>Tên mới:</i>
                            <Input
                                type="text"
                                value={this.state.tenMoi}
                                onChange={this.onChangeName}
                            />
                        </Col>
                    </FormGroup>
                    <center>
                        <Button outline color="primary" onClick={this.clickEdit}>Thoát</Button>
                        <Button type="submit" outline color="primary" onClick={this.handleChangeName}>Chỉnh sửa</Button>
                    </center>
                </Form>
            }
        </div>
        );               
    }
}
