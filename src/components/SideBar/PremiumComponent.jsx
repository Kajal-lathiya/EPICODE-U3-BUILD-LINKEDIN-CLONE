import { Button, Card, Row } from "react-bootstrap";

const Premium = () => {
  return (
    <Row>
      <Card className="frame">
        <Card.Body>
          <Card.Title className="d-flex justify-content-end f-14b">
            <span className="mr-auto">Add to your feed</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted f-14">
            <span style={{ color: "blue" }}>Asdren </span>, unlock your full
            potential with LinkedIn Premium
          </Card.Subtitle>
          <Row className="justify-content-around px-4">
            <img
              className="circle"
              src="https://media.licdn.com/dms/image/C4E03AQHqstlzFY9HHQ/profile-displayphoto-shrink_100_100/0/1653651039752?e=1676505600&v=beta&t=GldT25OiVzzwTRm0Lcf_fcMe3NGttX5YlQeDSCEX6g4"
              alt="profile"
            />
            <img
              src="https://media.licdn.com/dms/image/C4E0EAQFrAunGbB1ATQ/rightRail-logo-shrink_200_200/0/1631006388667?e=1671717600&v=beta&t=rsUoJdVlf-X3iDeJzSU_0umQar3WeiD2QpVIfaZgs5s"
              alt="key"
            />
          </Row>

          <Card.Text className="mt-2">
            See who's view your profile in the last 90 days
          </Card.Text>
          <Button className="rd" variant="outline-warning">
            <h5 className="m-0 py-0 px-2">Try for Free</h5>
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default Premium;
