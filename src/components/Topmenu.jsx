import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoimg from "../images/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Topmenu=()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct]=useState("");

  const myCart= useSelector((state)=>state.mycart.cart);
  const dataLength= myCart.length;
  const navigate= useNavigate();

 const handleSearch=()=>{
     navigate(`/searchpro/${product}`)
     setShow(false);
 }

return(
        <>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{position:"sticky", top:0, zIndex:"1"}}>
      <Container>
        <Navbar.Brand href="#home">

        <img src={logoimg} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="searchproduct">Search Product</Nav.Link>
            <Nav.Link as={Link} to="cartproduct">My Cart</Nav.Link>

            <NavDropdown title="Product Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="kidscat">Kids Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="menscat">Mens Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="womenscat">Womens Wear</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              

            <FaShoppingCart onClick={()=>{navigate("/cartproduct")}} />
            {dataLength>=1?  <span id="tokri"> {dataLength} </span> :""}         
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">

            <FaSearch onClick={handleShow} />
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Enter Product name:  <input type="text" value={product} onChange={(e)=>{setProduct(e.target.value)}} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    


        </>
    )
}

export default Topmenu;
