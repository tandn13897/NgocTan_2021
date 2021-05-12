import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserImg from './user.png'

export default class MoreComment extends Component {
    constructor(props) {
        super(props)

        this.createComments = this.createComments.bind(this);
    }

    createComments(comment) {
        return (
            <Row 
            key={comment.key}>
                <Col md = 'auto'> 
                    <img src={UserImg}
                    width='50px'
                    height='50px'/>
                </Col>
                <Col md = '8'> 
                <Row>
                    <h6> User: {comment.user}</h6>
                </Row>
                <Row>
                    <p>{comment.text}</p>
                </Row>
                </Col>
            </Row>
        )
    }



    render() {
        var todoEntries = this.props.entries;
        var listComment = todoEntries.map(this.createComments)
        return (
            <div>
                {listComment}
            </div>
        )
    }
}
