import React from "react";
import { Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function SkillComponent() {
  return (
    <Row className=" bgWhite ml-2">
      <Col className="pt-4 bgWhite">
        <Row className="px-4 ">
          <div className="col-6 d-flex flex-column">
            <h5 className="mb-0 ">
              <p>Skills</p>
            </h5>

            <div className="mb-3 mt-2">
              <div>
                <p>Project Management</p>
              </div>
              <div>
                <p>Business Development</p>
              </div>
              <div>
                <p>SAP Seccessfactors</p>
              </div>

              <div className="col skills d-flex justify-content-end">
                <div className="startAPost d-flex  rounded-pill">
                  <a href="/" className="mb-0 px-3 py-2  ">
                    Demonstrate Skill
                  </a>
                </div>
                <div>
                  <Icon.Plus
                    color="#666666"
                    size={40}
                    className="mt-1 plusIcon"
                  />
                </div>
                <div>
                  <Icon.Pencil
                    color="#666666"
                    size={22}
                    className="mt-3 plusIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </Row>
  );
}
