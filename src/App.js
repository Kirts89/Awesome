import React from 'react';
import logo from './logo.svg';
import './App.sass';
import { Button, Col, Container, Row } from 'react-bootstrap';

const INTERVAL = 10;
const FREQUENCY = 1000/INTERVAL;

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  increment(){
    this.setState({value: this.state.value + 1});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const value = this.state.value
    return (
      <div>
        <p>Таймер:</p>
        <p>
          <span>{Math.floor(value/FREQUENCY/60/60)} : </span>
          <span>{Math.floor(value/FREQUENCY/60) % 60} : </span>
          <span>{Math.floor(value/FREQUENCY) % 60} . </span>
          <span>{value % FREQUENCY}</span>
        </p>
      </div>
    );
  }
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Декоративный Камень</h1>
        <Button variant='info'>тыкать сюда</Button>
        <img width="300px" src={logo}></img>
        <Clock></Clock>
        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={6}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;