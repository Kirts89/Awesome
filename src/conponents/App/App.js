import React from 'react';
import logo from '../TopNavbar/logo.svg';
import './App.sass';
import TopNavbar from '../TopNavbar/TopNavbar.js'
import  {
  Button,
  ButtonGroup,
  Card
} from "react-bootstrap";
import Footer from '../Footer/Footer.js'

function App() {

  return (
    <div className="container">
      <TopNavbar/>

      <main role="main">
        <h2>Преимущества</h2>
        <hr/>
        <div className="row">
          <div className="col-md-3 text-center">Реализуем Ваш заказ индивидуально, и отправим удобной для Вас почтой.</div>
          <div className="col-md-3 text-center">Весь ассортимент продукции есть в наличии на складе. Ваш заказ будет обработан в кратчайшие сроки и отправлен.</div>
          <div className="col-md-3 text-center">Быстрое и качественное выполнение работы. Консультация по телефону или электронной почте.</div>
          <div className="col-md-3 text-center">Самый крупный производитель искусственного камня в Украине.</div>
        </div>
        <h2>Продукция</h2>
        <hr/>
        <div className="text-center">
          <ButtonGroup className="mb-2">
            <Button>Вся Продукция</Button>
            <Button>Декоративный кирпич</Button>
            <Button>Декоративная скала</Button>
          </ButtonGroup>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>

    <Footer/>
    </div>
  )
}

export default App;