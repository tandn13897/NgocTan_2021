import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
import Comment from './Comment/Comment';



export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: [],
        }
    }


    getAuthor = () => {
        for ( let i = 0; i < this.props.data.length; i++) {
            for ( let j = 0; j < this.props.Users.length; j++ ) {
                if ( this.props.data.owner === this.props.Users.id) {
                    return this.setState({
                        author: this.props.Users.name
                    })
                }
            }
        }
    }


    render() {
        return (
            <div>
                
                {
                    this.props.data.map( (data) => {
                        return (
                            <div className = 'post'>
                                <Row className = 'center' key={data.id}>
                                    <h2>{data.title}</h2>
                                </Row>
                                <Row className = 'center' >
                                    <Col md = '5'>
                                    <h5>Author: {this.getAuthor} </h5>
                                    <h5>Created at: {data.created_at}</h5>
                                    </Col>
                                    <Col md = '5' className='text-right'>
                                    {data.tags.map( (tag, index) => {
                                        return ( <Badge pill variant='primary' key ={index + 'a'}>
                                            {tag}
                                        </Badge>)
                                    })} 
                                    </Col>
                                </Row>
                                <Row className = 'center fit_size' >
                                    {data.content}
                                </Row>
                                <Row className = 'fit_size'>
                                    <Comment/>
                                </Row>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

