import React from 'react'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json";
import growth_strategy from "../../assets/growth_strategy1.jpg"
import powerfull_tools from "../../assets/powerfull_tools.jpg"
import marketing_managment from "../../assets/marketing_managment.jpg"
import automated_marketing from "../../assets/automated_marketing.jpg"
import growth_chart from "../../assets/growth_chart.jpg"

const featuresImage = {
    "growth_strategy": growth_strategy,
    "powerfull_tools": powerfull_tools,
    "marketing_managment": marketing_managment,
    "automated_marketing": automated_marketing,
    "growth_chart": growth_chart
}

const Features = () => {
    return (
        <>
            <section className="section-lg bg-primary overflow-hidden" id="features">
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12}>
                            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-xl-start text-center">
                                <Badge pill bg='success' className='px-3 py-2 mb-4 text-light'>
                                    <h6 className='mb-0'>Our Key Features</h6>
                                </Badge>
                            </motion.div>
                        </Col>
                        <Col xl={6} xs={12}>
                            <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className='text-success text-xl-start text-center mb-4'>Powerful tools for Bussinesss Growth</motion.h1>
                        </Col>
                        <Col xl={{ span: 5, offset: 1 }} offset={1} xs={12}>
                            <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className='text-light text-xl-start text-center mb-4'>Sivoci offers smart,scalable tools that help your business grow faster. From marketing to analytics, we give you everything you need to succeed—right at your fingertips.</motion.p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center aligb-items-center'>
                        <Col xl={8} xs={12}>
                            <Row>
                                {Data.featureData.slice(0, -1).map((items, index) => (
                                    <Col md={6} xs={12} key={index}>
                                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.2 }}>
                                            <Card className="features-card position-relative overflow-hidden mb-4">
                                                <Card.Img src={featuresImage[items.src]} alt={items.alt} className="img-fluid features-img" />
                                                <Card.ImgOverlay className='d-flex justify-content-center align-items-center rounded-top'>
                                                    <span className="border-1 rounded-2 bg-primary text-light fs-1 lh-1 p-2 me-3">
                                                        <i className={items.icon}></i>
                                                    </span>
                                                    <h5 className='text-primary mb-0'>{items.content}</h5>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={4} md={6} xs={12}>
                            {Data.featureData.slice(-1).map((items, index) => (
                                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.2 }} key={index}>
                                    <Card className="features-card position-relative overflow-hidden mb-4">
                                        <Card.Img src={featuresImage[items.src]} alt={items.alt} className="img-fluid features-img" />
                                        <Card.ImgOverlay className='d-flex justify-content-center align-items-center rounded-top'>
                                            <span className="border-1 rounded-2 bg-primary text-light fs-1 lh-1 p-2 me-3">
                                                <i className={items.icon}></i>
                                            </span>
                                            <h5 className='text-primary mb-0'>{items.content}</h5>
                                        </Card.ImgOverlay>
                                    </Card>
                                </motion.div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features
