
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './my component/MyNav';
import { Container, Row,Col } from 'react-bootstrap';
import MyFooter from './my component/MyFooter';
import MyCard from './my component/MyCard';
import MyAlert from './my component/MyAlert.jsx';




function App() {
  return (
    <div >
      <header>
        <MyNavbar/>
      </header>
      
      <main>
      <MyAlert/>
        <Container>
          <Row >
            <Col className='col-12 col-md-6 col-lg-12'>
            
            <MyCard />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </div>
   
  );
}

export default App;
