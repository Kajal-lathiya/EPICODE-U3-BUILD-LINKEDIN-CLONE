import { Button, Col, Container, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import { InfoSquareFill } from "react-bootstrap-icons";
import "../CssStyles/RightSideBarHome.css";

const RightSideBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="sidebar-container p-0">
            <div className="people pt-3 mt-3">
              <span className="pl-3 pb-3 text d-flex justify-content-between">
                Add to your feed <InfoSquareFill style={{ fontSize: "18px" }} />{" "}
              </span>
              <div className="pl-3 pt-2 pr-3 pb-2">
                <div>
                  <div className="d-flex">
                    <img
                      src="https://via.placeholder.com/150"
                      className="profile-img"
                      alt=" "
                    />

                    <div className="profile-details ml-4 mb-2">
                      <div className="profile-name">Lorenzo Giorgini</div>

                      <div className="profile-title">Strive Student</div>

                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center"
                          variant="outline-dark"
                        >
                          <Plus id="plus-icon" style={{ fontSize: "20px" }} />{" "}
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <img
                      src="https://via.placeholder.com/150"
                      className="profile-img"
                      alt=" "
                    />

                    <div className="profile-details ml-4 mb-2">
                      <div className="profile-name">Emilian Kasemi</div>

                      <div className="profile-title">Strive Student</div>

                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center"
                          variant="outline-dark"
                        >
                          <Plus id="plus-icon" style={{ fontSize: "20px" }} />{" "}
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <img
                      src="https://via.placeholder.com/150"
                      className="profile-img"
                      alt=" "
                    />

                    <div className="profile-details ml-4 mb-2">
                      <div className="profile-name">Adam Belahouane</div>

                      <div className="profile-title">Strive Student</div>

                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center"
                          variant="outline-dark"
                        >
                          <Plus id="plus-icon" style={{ fontSize: "20px" }} />{" "}
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reccomentations d-flex align-items-center justify-content-center">
                  <span>
                    View all recommendations{" "}
                    <ArrowRight
                      style={{ fontSize: "20px", fontWeight: "600" }}
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RightSideBar;
