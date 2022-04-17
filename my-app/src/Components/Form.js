import React, { useState } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "./SignupForm";
import Login from "./Login";
import UserProvider from "../Context/UserContext";



 function Form() {
 

  return (
    <div className="containerTab">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav
              variant="pills"
              className=" bg-success bg-gradient f-1 mt-4 mx-5 
              flex-row justify-content-center align-item-center"
            >
              <Nav.Item className="w-50 text-center">
                <Nav.Link eventKey="first">ورود</Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-50 text-center">
                <Nav.Link eventKey="second">ثبت نام</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <UserProvider>
                  <Login
                  
                    
                  />
                </UserProvider>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SignupForm
                  style={{ marginLeft: "30%" }}
                  
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
export default Form