import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImg from '../Images/3585972.png';
import UserImg from '../Images/user.png';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row className='text-center center'>
                    <Col md = '1'>
                        <img src ={LogoImg}
                             width='50px'
                             height='50px'/>
                    </Col>
                    <Col md = '1'> Logo </Col>
                    <Col md = '8'>Blog</Col>
                    <Col md = '1'>
                        <img src={UserImg}
                             width='50px'
                             height='50px'/>
                    </Col>
                    <Col md = '1'>Adam Levine</Col>
                </Row>
            </div>
        )
    }
}
