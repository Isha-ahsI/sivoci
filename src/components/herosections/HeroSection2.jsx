import React from 'react'
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json"
import arrow_right from "../../assets/arrow_right.svg";
import smart_growth_strategy from "../../assets/smart_growth_strategy.png"
import Marketing_strategy from "../../assets/marketing_strategy.png"
import creative_solutions from "../../assets/creative_solutions.png"

const cardImage = {
    "smart_growth_strategy": smart_growth_strategy,
    "Marketing_strategy": Marketing_strategy,
    "creative_solutions": creative_solutions
}

const HeroSection2 = () => {
    return (
        <>
            <section className="hero-section-primary2 overflow-hidden min-vh-100 d-flex justify-content-center align-items-center overflow-hidden">
                <Container>
                    <Row>
                        <Col xs={12} className='my-5'>
                            <div className="text-center">
                                <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-light  display-2 ms-5"><span className="fw-normal">Accelerate </span> Your</motion.h1>
                                <h1 className="display-2 me-5">
                                    <motion.span initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="fw-semibold text-primary bg-light me-3 px-3 rounded-3 d-inline-block">Business</motion.span>
                                    <motion.span  initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-success fw-semibold text-decoration-underline d-inline-block">Growth</motion.span>
                                </h1>
                                <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-light  display-2 ms-5 fw-normal">Today</motion.h1>
                                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-light">Unlock the full potential of your business with targeted strategies, smart
                                    technology, and results-driven marketing.</motion.p>
                                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="position-relative d-flex justify-content-center align-item-center">
                                    <Button variant="light" className='me-3'>Explore More</Button>
                                    <Button variant='success'>Book demo</Button>
                                    <div className="position-absolute arrow-icon d-md-block d-none">
                                        <Image src={arrow_right} alt="arrow_right" className="img-fluid" />
                                    </div>
                                </motion.div>
                            </div>
                        </Col>
                        <Col xs={12} className='mb-5'>
                            <div className="d-flex justify-content-center align-items-center">
                                {Data.heroSection2.map((items, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, scale: 0, x: index === 0 ? -100 : index === 2 && 100 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                        <Card className={`hero-card-wrapper ${items.class} d-sm-block d-none ${index === 1 ? "mx-5" : ""}`}>
                                            <Card.Body>
                                                <Card.Title className='text-light'>{items.title}</Card.Title>
                                                <Card.Img src={cardImage[items.src]} alt={items.title} className="img-fluid" />
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroSection2
