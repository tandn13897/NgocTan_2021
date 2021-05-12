import React, { Component } from 'react';
import { Badge, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';
import postsData from '../data/posts.json';
import Content from './content/Content';
import usersDetail from '../data/users.json';
import Comment from './content/Comment/Comment'


export default class Posts extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            content: postsData,
            usersInfo: usersDetail,
            searchKey: '', 
            isSearching: false,
            newData: []
        }
    }

    // Chức năng searching chưa hoàn thành
    // Ý tưởng là em sẽ lấy từ khóa mà Users đã nhập, so sánh từ khóa với từng title trong mảng JSON xem title có bao gồm từ khóa của User không.
    // Nếu có thì đẩy thành phần JSON đó vào mảng mới là newData và render dữ liệu
    // Em bị đứng ở chỗ không đẩy được dữ liệu vào mảng mới
    handleSeachKey = () => {
        
        if ( this.state.searchKey !== '') {
            this.setState({ 
                isSearching: true
            })

            // Đoạn code em chưa giải quyết được
           if (this.state.isSearching) {
               this.state.content.filter( item => {
                   if ( item.title.toUpperCase() === this.state.searchKey.toUpperCase() ) {
                       return this.setState({
                           newData: item
                       })
                   }
               })
           }
            
        } else {
            this.setState({
                isSearching: false
            })
        }

    }
    

    handleSeachClick = async(e) => {
        e.preventDefault();
        this.setState({
            searchKey: this.state.searchKey,
        })
        this.handleSeachKey();
    }

    render() {
        return (
            <div className='searching'>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="What are you looking?"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange = { (e) => this.setState({ searchKey: e.target.value})}/>
                <InputGroup.Append>
                    <Button 
                    variant="outline-secondary"
                    onClick = {this.handleSeachKey} >Search</Button>
                </InputGroup.Append>
                </InputGroup>
            <div>

                { this.state.isSearching ?
                <div>
                    { this.state.newData.map( data => {
                        return (
                            <div className = 'post' key={data.id}>
                                <Row className = 'center'>
                                    <h2>{data.title}</h2>
                                </Row>
                                <Row className = 'center'>
                                    <Col md = '5'>
                                    <h5>Author: {data.owner}</h5>
                                    <h5>Created at: {data.created_at}</h5>
                                    </Col>
                                    <Col md = '5' className='text-right'>
                                    {data.tags.map( tag => {
                                        return ( <Badge pill variant='primary'>
                                            {tag}
                                        </Badge>)
                                    })} 
                                    </Col>
                                </Row>
                                <Row className = 'center fit_size'>
                                    {data.content}
                                </Row>
                                <Row className = 'fit_size'>
                                    <Comment/>
                                </Row>
                            </div>
                        )
                    }) }
                </div>

                :
                
                <div>
                    <Content data = {this.state.content}
                             Users = {this.state.usersInfo}/>
                </div>}
            </div>
            </div>

        )
        
    }
}
