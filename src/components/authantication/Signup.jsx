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


const Signup = () => {
    const { showSignup, handleLoginOpen, handleClose } = useModal()
    return (
        <>
            <Modal show={showSignup} onHide={handleClose} centered backdrop="static" keyboard={false} size="xl" className='auth-section'>
                <Modal.Body className='auth-img text-center'>
                    <Container className='p-0'>
                        <Row className="align-items-center">
                            <Col xs={12} lg={6}>
                                <div className="d-lg-block d-none">
                                    <Image height={30} src={logo} alt="logo" className='mb-3' />
                                    <h1 className="fw-medium display-5 text-primary">Welcome to Strivo</h1>
                                    <p className="mb-4 text-dark">Join us and start growing your business today.</p>
                                    <small className="d-block mb-1">Already have an account?</small>
                                    <Button className="btn btn-auth" onClick={handleLoginOpen}>LogIn</Button>
                                </div>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className="modal-form text-center position-relative">
                                    <button type="button" onClick={handleClose} className="btn-close top-0 end-0 position-absolute mt-3 me-3 z-2"></button>
                                    <div className="d-block d-lg-none">
                                        <Image height={20} src={logo} alt="logo" className='mb-3' />
                                        <h1 className="fw-bold text-primary">Welcome to Strivo</h1>
                                        <p className="text-dark">Join us and start growing your business today.</p>
                                    </div>
                                    <div className="d-lg-block d-none">
                                        <h1 className="fw-bold text-primary" onClick={handleClose}>SignUp</h1>
                                    </div>
                                    <Form className='form-auth mt-4'>
                                        <Form.Group as={Row}>
                                            {Data.authButton.map((items, index) => (
                                                <Col xs={12} className="mb-4" key={index}>
                                                    <Button  className={`btn ${items.class} d-flex align-items-center justify-content-center rounded-5 w-100`}>
                                                        <Image src={appicon[items.src]} alt={items.content} />
                                                        <span className="ms-2">{items.content}</span>
                                                    </Button>
                                                </Col>
                                            ))}
                                            <Col xs={12} className='mb-4'>
                                                <p className="text-light mb-0">Or</p>
                                            </Col>
                                            {Data.authFormData.map((items, index) => (
                                                <Col xs={12} className="mb-3" key={index}>
                                                    <Form.Control size="lg" type={items.type} placeholder={items.placeholder} />
                                                </Col>
                                            ))}
                                            <Col xs={12} className='mb-4 text-start'>
                                                <Form.Check type="checkbox" id="checkbox1" label="I agree to the Terms and Conditions an Privacy Policy." />
                                            </Col>
                                            <Col xs={12} className='mb-5'>
                                                <Button variant='primary' onClick={handleClose} className="rounded-5">SignUp</Button>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="d-lg-none d-block">
                                                    <small className="text-center text-secondary">Already have an account?
                                                        <Link className="fw-bold text-success ms-1" onClick={handleLoginOpen}>LogIn</Link>
                                                    </small>
                                                </div>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Signup
