import { Button, Card, Col, Row } from "react-bootstrap";

const PeopleViewed = () => {
  return (
    <Row>
      <Card className="frame mt-2">
        <Card.Body>
          <Card.Title className="d-flex">
            <h5>People also viewed</h5>
          </Card.Title>
          <Row className="justify-content-around px-4">
            <Col md={3} lg={3} className="p-0">
              <img
                className="circle"
                id="circle"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="profile"
              />
            </Col>
            <Col md={9} lg={9} className="pl-3">
              <Card.Text className="mb-2 text-muted f-14 row align-items-start">
                <p className="m-0" style={{ color: "blue" }}>
                  <span className="f-14b">Kajal Lathya</span>
                </p>
              </Card.Text>
            </Col>
          </Row>

          <Button className="rd" variant="outline-dark">
            <h5 className="m-0 py-0 px-2">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
              Message
            </h5>
          </Button>
        </Card.Body>
        <Card.Body>
          <Row className="justify-content-around px-4">
            <Col md={3} lg={3} className="p-0">
              <img
                className="circle"
                id="circle"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="profile"
              />
            </Col>
            <Col md={9} lg={9} className="pl-3">
              <Card.Text className="mb-2 text-muted f-14 row align-items-start">
                <p className="m-0" style={{ color: "blue" }}>
                  <span className="f-14b">Luis Gadze</span>
                </p>
              </Card.Text>
            </Col>
          </Row>

          <Button className="rd" variant="outline-dark">
            <h5 className="m-0 py-0 px-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              Connect
            </h5>
          </Button>
        </Card.Body>
        <Card.Body>
          <Row className="justify-content-around px-4">
            <Col md={3} lg={3} className="p-0">
              <img
                className="circle"
                id="circle"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="profile"
              />
            </Col>
            <Col md={9} lg={9} className="pl-3">
              <Card.Text className="mb-2 text-muted f-14 row align-items-start">
                <p className="m-0" style={{ color: "blue" }}>
                  <span className="f-14b">Stefano Micceli</span>
                </p>
              </Card.Text>
            </Col>
          </Row>

          <Button className="rd" variant="outline-dark">
            <h5 className="m-0 py-0 px-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              Connect
            </h5>
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default PeopleViewed;
