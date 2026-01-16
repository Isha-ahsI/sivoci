import React from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { motion } from "motion/react"
import UserImageGrid from './UserImageGrid';

const Team = () => {
    return (
        <>
            <section className='team-section wave-bg-2 position-relative section-lg overflow-hidden'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <UserImageGrid />
                            <div className="text-center">
                                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                    <Badge pill bg="primary" className='text-light py-2 px-3 mb-3'> <h6 className="mb-0">Expert</h6></Badge>
                                </motion.div>
                                <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="mb-2 fw-bold text-success">Meet Our Team</motion.h1>
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                    <p className="text-muted mb-0">We're a team of passionate professionals dedicated to helping your business grow,</p>
                                    <p className="text-muted mb-3"> one smart strategy at a time</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                                    <Button variant='primary' className="rounded-5">
                                        <span>Read success story</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </Button>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team
