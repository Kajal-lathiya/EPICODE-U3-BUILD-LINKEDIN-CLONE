import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import TopNavBar from "./components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import UserProfile from "./components/UserProfile";
import MyProfile from "./components/myProfile";
import Footer from "./components/FooterComponent";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="mainBGColor">
        <Container>
          <TopNavBar />
          <Row>
            <Col lg={9}>
              <MyProfile className="myProfile" />
            </Col>
            <Col lg={3} className=" mt-3 p-0 ">
              {" "}
              <SideBar />
            </Col>
          </Row>
        </Container>
        <Footer />
        <Routes>
          {/* <Route element={<SearchResults />} path="/search" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

