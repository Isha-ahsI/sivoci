import React from 'react'
import { Button, Modal, Container, Row, Col, Form, Image } from 'react-bootstrap';
import Data from "../../data/data.json";
import { useModal } from '../../context/ModalContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import google from "../../assets/google.png"
import mac from "../../assets/mac.png"

const appicon={
  "google":google,
  "mac" :mac
}



const Login = () => {
  const { showLogin, handleSignupOpen, handleClose } = useModal()
  return (
    <>
      <Modal show={showLogin} onHide={handleClose} centered backdrop="static" keyboard={false} size="xl" className='auth-section'>
        <Modal.Body className='auth-img text-center'>
          <Container className='p-0'>
            <Row className="align-items-center">
              <Col xs={12} lg={6}>
                <div className="modal-form text-center position-relative">
                  <div className="d-block d-lg-none">
                    <Image height={20} src={logo} alt="logo" className='mb-3' />
                    <button type="button" onClick={handleClose} className="btn-close top-0 end-0 position-absolute mt-3 me-3 z-2"></button>
                    <h1 className="fw-bold text-primary">Welcome Back!</h1>
                    <p className="text-dark">Log in to continue managing your business efficiently.</p>
                  </div>
                  <div className="d-lg-block d-none">
                    <h1 className="fw-bold text-primary" onClick={handleClose}>Log In</h1>
                  </div>
                  <Form className='form-auth mt-4'>
                    <Form.Group as={Row}>
                      {Data.authFormData.slice(1).map((items, index) => (
                        <Col xs={12} className="mb-3" key={index}>
                          <Form.Control size="lg" type={items.type} placeholder={items.placeholder} />
                        </Col>
                      ))}
                      <Col xs={12} className='mb-4 text-start'>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <Form.Check type="checkbox" id="checkbox2" label="Remember me" />
                          <Link href="#" className="text-primary">Forget password</Link>
                        </div>
                      </Col>
                      <Col xs={12} className='mb-5'>
                        <Button variant='primary' onClick={handleClose} className="rounded-5">
                          LogIn
                        </Button>
                      </Col>
                      <Col xs={12} className='mb-4'>
                        <p className="text-light mb-0">Or</p>
                      </Col>
                      {Data.authButton.map((items, index) => (
                        <Col xs={12} className="mb-4" key={index}>
                          <Button className={`btn ${items.class} d-flex align-items-center justify-content-center rounded-5 w-100`}>
                            <Image src={appicon[items.src]} alt={items.content} />
                            <span className="ms-2">{items.content}</span>
                          </Button>
                        </Col>
                      ))}
                      <Col xs={12}>
                        <div className="d-lg-none d-block">
                          <small className="text-center text-secondary">Don't have an account?
                            <Link className="fw-bold text-success ms-1" onClick={handleSignupOpen}>SignUp</Link>
                          </small>
                        </div>
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="d-lg-block d-none">
                  <Image height={30} src={logo} alt="logo" className='mb-3' />
                  <button type="button" onClick={handleClose} className="btn-close auth-close-btn top-0 end-0 position-absolute mt-3 me-3 z-2"></button>
                  <h1 className="fw-medium display-5 text-primary">Welcome Back!</h1>
                  <p className="mb-4 text-dark">Log in to continue managing your business efficiently.</p>
                  <small className="d-block mb-1">Don't have an account?</small>
                  <Button className="btn btn-auth" onClick={handleSignupOpen}>SignUp</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Login
