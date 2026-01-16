import React, { useState } from 'react'
import { Container, Row, Col, Button, Accordion, Image } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json"
import AccordionImg from "../../assets/faqs_img.jpg"

const FAQs = () => {
    const [selectedType, setSelectedType] = useState("General"); //set types of data

    const types = [...new Set(Data.accordionItemData.map(faqs => faqs.type))]; //get all unique types

    const filteredQuestion = Data.accordionItemData.filter(faqs => faqs.type === selectedType); // Filter questions by selected type

    return (
        <>
            <section className="section-lg faqs-section overflow-hidden" id="FAQs">
                <Container>
                    <Row>
                        <Col xs={12} className='mb-4'>
                            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                <h1 className="display-5 text-primary text-center fw-medium">Frequently Asked Questions</h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                <p className="text-secondary text-center mb-0">Have questions about our services, process, or pricing?</p>
                                <p className="text-secondary text-center">We’ve compiled a list of commonly asked questions to help you
                                    better understand how we support your business growth.</p>
                            </motion.div>
                        </Col>
                        <Col xs={12} className='mb-5'>
                            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4" id="faq-categories">
                                {types.map((type, index) => (
                                    <motion.div key={type} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: index * 0.1 }}>
                                        <Button className='btn-glow'  onClick={() => setSelectedType(type)}>{type}</Button>
                                    </motion.div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Row className='align-items-center'>
                                <Col lg={7} xs={12}>
                                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                        <Accordion flush defaultActiveKey="0">
                                            {filteredQuestion.map((items, index) => (
                                                <Accordion.Item key={index} eventKey={items.evenkey}>
                                                    <Accordion.Header>
                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                            <span>{items.question}</span>
                                                            <div className="toggle-icon">
                                                                <i className="ri-add-large-fill"></i>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>{items.answer}</Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </motion.div>
                                </Col>
                                <Col lg={{ span: 4, offset: 1 }} xs={12}>
                                    <motion.div initial={{ opacity: 0, x: 100 ,scale:0 }} whileInView={{ opacity: 1, x: 0 ,scale:1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="d-lg-block d-none">
                                        <Image src={AccordionImg} alt="man_searching" className="img-fluid" />
                                    </motion.div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FAQs
