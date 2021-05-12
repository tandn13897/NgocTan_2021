import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './component/Header/Header';
import Body from './component/Body/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";


export default class App extends React.Component { 
    state = {
        items: Array.from({ length: 20}),
    }


    fetchMoreData = () => {
      setTimeout( () => {
        this.setState({
            items: this.state.items.concat(Array.from({ length: 20}))
        })
      }, 1000)
    }

  render() {
    return (
      <Container>
        <Header/>
        <Body/>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div  key={index}>
              <Row className='center fit_size post'>
                Title {index}
              </Row>
            </div>
          ))}
        </InfiniteScroll>         
      </Container>
    )
  }
}

render(<App />, document.getElementById("root"));

