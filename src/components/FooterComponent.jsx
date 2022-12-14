import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import LinkedinLogo from "../assets/linkedin-logo.png";

export default function Footer() {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={12}>
            <div className="linkedinlogo-container">
              <Image src={LinkedinLogo} className="linkedinlogo" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <ul>
                <li>About</li>
                <li>Community Guidelines</li>
                <li>Privacy & Terms</li>
                <li>Sales Solutions</li>
                <li>Safety Center</li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            {" "}
            <div>
              <ul>
                <li>Accessibility</li>
                <li>Careers</li>
                <li>Ad Choices</li>
                <li>Mobile</li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            {" "}
            <div>
              <ul>
                <li>Talent Solutions </li>
                <li>Marketing Slutions</li>
                <li>Advertising</li>
                <li>Small Business</li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex  mb-3">
              <div className="mr-2">
                <BsQuestionCircleFill />
              </div>
              <div className="d-flex flex-column">
                <span>Question?</span>
                <span>Visit our Help Center</span>
              </div>
            </div>
            <div className="d-flex t">
              <div className="mr-2">
                <RiSettings3Fill />
              </div>
              <div className="d-flex flex-column">
                <span>Manage your account and privacy</span>
                <span>Go to your settings</span>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex flex-column">
              <label>Select Language</label>
              <select name="language">
                <option value="English">English (English)</option>
                <option value="Italian">German</option>
                <option value="German">Italian</option>
                <option value="Romaian">Albanian</option>
                <option value="Russian">Spanish</option>
                <option value="Arabic">Arabic</option>
                <option value="Swahili">Swahili</option>
                <option value="Swahili">Hindu</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
