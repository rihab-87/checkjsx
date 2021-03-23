import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import jsxx from "./jsxx.jpg";

function App() {
  return (
    <Container style={{ border: "solid 1px black", maxWidth: "80vw" }} className="App ">
      <Row className="row">
        <h1 className="title red font-weight-bolder">React Js</h1> <br />
      </Row>
      <Row>
        <Col>
          <img src={jsxx} alt="imageInSrc" className="img-fluid" />
        </Col>
        <Col>
          <img src="react.png" alt="imageInPublic" className="img-fluid" />
        </Col>
      </Row>

      <Row className="row">
        <h2 className="title red">How to start with React and Jsx:</h2>
      </Row>
      <Row className="row">
        <video  id="idvideo" style={{width:"320" , height:"240"}} controls >
          <source src="../myVideo.mp4" type="video/mp4" />
        </video>
      </Row>
    </Container>
  );
}

export default App;
