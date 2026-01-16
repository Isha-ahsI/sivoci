import React from 'react'
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { motion } from "motion/react"
import img3 from '../../assets/hero-img3.png'
import Data from '../../data/data.json'

const HeroSection3 = () => {
  return (
    <>
      <section className="hero-section-primary3 overflow-hidden min-vh-100  d-flex align-items-center overflow-hidden">
        <Container>
          <Row className='align-items-center'>
            <Col xl={5} xs={12} className='my-5 my-xl-0'>
              <motion.div initial={{ opacity: 0, scale: 0, x: -100 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                <Image src={img3} alt="girl-with-tablet-that-display-growth-chart-and-progress-result" className='img-fluid' />
              </motion.div>
            </Col>
            <Col xl={{ span: 6, offset: 1 }} xs={12} >
              <div className="text-center">
                <motion.h1 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="display-4 fw-normal text-primary mb-0">Smart
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="display-2 fw-medium text-success z-2 text-decoration-underline mx-3 d-inline-block">Solutions</motion.span>
                  for
                </motion.h1>
                <motion.h1 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="display-4 fw-normal text-success mb-4">Real Business <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="display-2 fw-medium text-primary text-decoration-underline ms-2 d-inline-block">Growth</motion.span> </motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-secondary mb-4">Empower your business with innovative strategies, intelligent
                  automation, and performance-driven marketing. We deliver scalable solutions that turn your
                  growth goals into measurable success.</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="d-flex justify-content-between  align-items-center rounded-pill bg-light shadow-sm mb-4 p-sm-1">
                  <div>
                    <Form.Control size="lg" type="email" placeholder="example@gmail.com" className="bg-transparent border-0 shadow-none mx-2" />
                  </div>
                  {Data.heroSection3Btn.map((items, index) => (
                    <Button variant='primary' key={index} className={items.class}>
                      {items.icon ? <i className={`${items.icon} fs-5`}></i> : items.lable}
                    </Button>
                  ))}
                </motion.div>
                <div className="d-flex justify-content-center align-items-center mb-1">
                  <motion.div className="me-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <i key={index} className="ri-star-fill fs-5 text-warning"></i>
                    ))}
                    <i className="ri-star-half-line fs-5 text-warning"></i>
                  </motion.div>
                  <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-primary mb-0">4.5 out of 5</motion.p>
                </div>
                <motion.p initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="text-primary mb-0">Trusted by over <span className='fw-semibold text-decoration-underline'>20 thousand</span> users</motion.p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection3
