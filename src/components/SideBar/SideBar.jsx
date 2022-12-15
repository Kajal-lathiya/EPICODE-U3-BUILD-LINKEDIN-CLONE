import Premium from "./PremiumComponent";
import Promoted from "./PromotedComponent";
import PeopleKnow from "./PeopleComponent";
import PeopleViewed from "./ViewComponent";

import "./sidebar.css";

const { Container, Row, Col } = require("react-bootstrap");

const SideBar = () => {
  return (
    <Container>
      <Row className="justify-content-center Side">
        <Col md={4} lg={4}>
          <Premium />
          <PeopleViewed />
          <PeopleKnow />
          <Promoted />
        </Col>
      </Row>
    </Container>
  );
};
export default SideBar;
