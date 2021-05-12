import React, { Component } from 'react';
import { Accordion, Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './MoreComment'
import UserComments from './comments.json';
import UserImg from './user.png'

export default class Comment extends Component {
    constructor(props) {
      super(props);
      this.state ={
        comments: []
      }

      this.addComment = this.addComment.bind(this)

    }

    addComment(e) {
      if (this._inputElement.value !== '') {
        var newComment = {
          text: this._inputElement.value,
          key: Date.now(), 
          user: Math.floor(Math.random() * 11)
        };

        this.setState((prevState) => {
          return {
            comments: prevState.comments.concat(newComment)
          };
        });

        this._inputElement.value = ''
      }

      console.log(this.state.comments);
      e.preventDefault();
    }
  
  
    render() {
        return (
            <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {UserComments.length} Relies
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {UserComments.map( comment => { 
                        return (
                        <Row key={comment.id}>
                            <Col md = 'auto'> 
                            <img src={UserImg}
                            width='50px'
                            height='50px'/>
                            </Col>
                            <Col md = '8'> 
                            <Row>
                               <h6> User: {comment.owner}</h6>
                            </Row>
                            <Row>
                                <p>{comment.content}</p>
                            </Row>
                            </Col>
                        </Row> )
                    })}

                <Comments entries={this.state.comments}/>
                <form onSubmit={this.addComment}>
                  <input 
                  ref={(a) => this._inputElement = a}
                  placeholder='Write your comment'>
                  </input>
                  <button type='submit'>Add comment</button>
                </form>

                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>
        )
    }
}
