import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import '../../../style/khuNha.css';
import '../../../style/style1.css';
import '../../../style/style_common.css';

export default class ThemKhuNha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false, 
            tenKhuNha: ""
        }
    }

    clickAdd = () => {
        this.setState({
            isCreating: !this.state.isCreating
        })
    }

    onChangeName = (event) => {
        this.setState({
            tenKhuNha: event.target.value
        })
    }

    handleAddNew = () => {
        console.log(this.state.tenKhuNha);
        this.props.themKhuNha(this.state.tenKhuNha)
    }

    render() {
        return (
                <div className="col-md-3">
                {
                    !this.state.isCreating ?
                        <div className="khuNha_item view view-first" onClick={this.clickAdd}>
                            <center className="themKhuNha">
                                <i className="fas fa-plus-circle" style={{ cursor: "pointer", fontSize: "28px", marginTop: "40px"}}></i>
                                <br />
                                Thêm khu nhà mới
                            </center>
                        </div>
                        :
                        <Form>
                            <FormGroup>
                                <Col sm="12" md={{ size: 12 }}>
                                    <i>Tên khu nhà mới:</i>
                                    <Input
                                        type="text"
                                        value={this.state.tenKhuNha}
                                        onChange={this.onChangeName}
                                    />
                                </Col>
                            </FormGroup>
                            <center>
                                <Button outline color="primary" onClick={this.clickAdd}>Thoát</Button>
                                <Button type="submit" outline color="primary" onClick={this.handleAddNew}>Thêm</Button>
                            </center>
                        </Form>
                }
                </div>
        );
    }
}