import React from 'react';
import Homebanner from "../components/functional/Homebanner";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cogoToast from "cogo-toast";
import exportFromJSON from 'export-from-json'
import * as htmlToImage from 'html-to-image';

const Homepage = () => {
    const InfoToast = () => {
       let options = {
           "position" : "top-right",
           "hideAfter" : 3
       }
        cogoToast.info("Test Info", options);
    }
    const SuccessToast = () => {
        cogoToast.success("Test Info");
    }
    const ExportCSV = () => {
      const data = [
          {
              name: "Sohan",
              city: "Dhaka"
          },
          {
              name: "Saif",
              city: "Kushtia"
          }
      ]
        const fileName = 'Info';
        const exportType =  exportFromJSON.types.xls;
        exportFromJSON({ data, fileName, exportType });
    }
    const downloadImage = () => {
        var node = document.getElementById('homepage');
        htmlToImage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }
    return (
        <div id="homepage">
            {/*<Homebanner title="React" subtitle="let's make some fun!" json={{name: "sohan", age: "26"}}/>*/}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <button onClick={InfoToast} className="btn btn-outline-info">Info</button>
            <button onClick={SuccessToast} className="btn btn-outline-success">Success</button>
            <button onClick={ExportCSV} className="btn btn-outline-primary">Download CSV</button>
            <button onClick={downloadImage} className="btn btn-outline-primary">Download Image</button>
        </div>
    );
};

export default Homepage;