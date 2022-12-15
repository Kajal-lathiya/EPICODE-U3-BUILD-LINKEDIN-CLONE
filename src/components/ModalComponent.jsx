import React, { useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { createNewExperience } from "../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
const ModalComponent = ({ visible, onhide }) => {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state);
  console.log("redux:", redux);
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [empType, setEmpType] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const onSubmit = () => {
    const data = {
      role: title,
      company: companyName,
      startDate: startMonth + startYear,
      endDate: endMonth + endYear,
      description: description,
      area: "Berlin",
      username: "admin"
    };
    dispatch(createNewExperience(data));
    onhide()
  };
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Row className="notifyDiv p-3 ">
          <Col>
            <h6 className="m-0">Notify network</h6>
            <p className="m-0 p-0 fontGray">
              Turn on to notify your network of key profile changes (such as new
              job) and work anniversaries. Updates can take up to 2 hours. Learn
              more about
              <a className="themeFont"> sharing profile changes.</a>
            </p>
          </Col>
          <Form.Check type="switch" id="custom-switch" />
        </Row>
        <p className="mt-2">* Indicates required</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Retail Sales Manager"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Employment type</Form.Label>
            <Form.Control
              as="select"
              value={empType}
              onChange={(e) => setEmpType(e.target.value)}
            >
              <option>Please select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Frelancer</option>
              <option>Internship</option>
            </Form.Control>
            <p>
              Learn more about <a className="themeFont">employment types.</a>
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Company name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Microsoft"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: London United Kingdom"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={checkbox}
              onChange={(e) => setCheckbox(e.target.value)}
              label="I am currently working in this role"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start date*</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  as="select"
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                  required
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  required
                >
                  <option>Year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End date*</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  as="select"
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                  required
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  required
                >
                  <option>Year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Industry*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Information Technology & Services"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              autoFocus
              required
            />
            <p className="p-0 m-0">
              LinkedIn uses industry information to provide more relevant
              recommendations{" "}
            </p>
            <p className="">
              Learn more about <a className="themeFont">industry options</a>
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profile headline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: React Native developer"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              autoFocus
            />
            <p className="p-0 m-0">
              Appears below your name at the top of the profile{" "}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onhide}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
