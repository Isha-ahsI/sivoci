import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json";
import icon1 from "../../assets/growth_strategy.png"
import icon2 from "../../assets/market_research.png"
import icon3 from "../../assets/brand_positioning.png"
import icon4 from "../../assets/digital_marketing.png"
import icon5 from "../../assets/bussiness_solutions.png"
import icon6 from "../../assets/financial_planning.png"

const serviceIcon = {
    "icon1": icon1,
    "icon2": icon2,
    "icon3": icon3,
    "icon4": icon4,
    "icon5": icon5,
    "icon6": icon6
}

const Services = () => {
    return (
        <>
            <section className="section-lg overflow-hidden" id="services">
                <Container>
                    <Row>
                        <Col xs={12} className='mb-5'>
                            <motion.h6 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="underline-after position-relative text-center z-0">
                                <span className="position-relative z-1 bg-white text-primary px-3">Our Best Services</span>
                            </motion.h6>
                            <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="d-block text-gradiant text-center fw-semibold">What we can Offer?</motion.h1>
                        </Col>
                    </Row>
                    <Row>
                        {Data.serviceData.map((items, index) => (
                            <Col xl={4} md={6} xs={12} key={index}>
                                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                    <Card className="service-card service-card-soft-success rounded-bottom-0 mb-5 overflow-hidden">
                                        <Card.Body className="text-primary text-center z-2">
                                            <Card.Img src={serviceIcon[items.src]} alt="Growth Strategy" className="my-4" />
                                            <Card.Title className="position-relative mb-4">{items.title}</Card.Title>
                                            <Card.Subtitle className="mb-4 text-secondary fw-normal">{items.subtitle}</Card.Subtitle>
                                            <ul className="list-group list-unstyled lh-lg">
                                                {items.features.map((feature, index) => (
                                                    <li className="item-list" key={index}><i className="ri-checkbox-circle-fill"></i>{feature}</li>
                                                ))}
                                            </ul>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2 className="mb-0 opacity-25">{items.number}</h2>
                                                <Card.Link href="#" className="text-decoration-none text-primary fw-medium">
                                                    <span>Read More</span>
                                                    <i className="ri-arrow-right-double-line fs-5"></i>
                                                </Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services
