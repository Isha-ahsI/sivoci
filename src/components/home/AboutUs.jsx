import React from 'react'
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { useAnimatedCounter } from '../../context/CounterContext'; 
import { motion } from "motion/react"
import AboutImg from '../../assets/employee.jpg';
import Badge1 from '../../assets/expert_growth_strategists.png';
import Badge2 from '../../assets/proven_business _results.png';
import Data from '../../data/data.json';
import CountUp from 'react-countup';

const AboutUs = () => {
    const { visible, setVisible } = useAnimatedCounter()
    return (
        <>
            <section className="section-lg aboutus-section wave-bg-1 overflow-hidden" id="aboutus">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col lg={6} xs={12} className='mb-lg-0 mb-5'>
                            <motion.div initial={{ opacity: 0 ,scale: 0}} whileInView={{ opacity: 1,scale: 1}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear', delay:0.1}} className="aboutus-img-wrap position-relative">
                                <Image src={AboutImg} alt="employees work" className="img-fluid aboutus-img" />
                                <div className="custom-border position-absolute"></div>
                                <div className="custom-bg position-absolute"></div>
                                <Badge bg="light" text="dark" className="position-absolute top-0 end-0 z-2 shadow">
                                    <div className="d-flex align-items-center p-sm-2">
                                        <Image src={Badge1} alt="Expert Growth Strategists" />
                                        <h6 className="ms-2 mb-0">Expert Growth Strategists</h6>
                                    </div>
                                </Badge>
                                <Badge bg="light" text="dark" className="position-absolute start-0 bottom-0 z-2 shadow">
                                    <div className="d-flex align-items-center p-sm-2">
                                        <h6 className="me-2 mb-0">Proven Business Results</h6>
                                        <Image src={Badge2} alt="Proven Business Results" />
                                    </div>
                                </Badge>
                            </motion.div>
                        </Col>
                        <Col lg={{ span: 5, offset: 1 }} xs={12} >
                            <motion.div initial={{ opacity: 0 ,x: 150}} whileInView={{ opacity: 1,x: 1}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear',delay:0.1}} className="text-lg-start text-center">
                                <Badge pill bg="success" className='px-3 py-2 mb-4 text-light'>
                                    <h6 className="mb-0">About our agency</h6>
                                </Badge>
                                <h2 className="text-primary mb-4 fw-semibold">Your growth is our goal and we bring the tools to make it happen.</h2>
                                <p className="text-secondary mb-4">We help businesses grow with smart strategies, creative ideas, and real results.
                                    From startups to established brands, we’re here to guide your journey to success.Over the years, we've grown from a small team into a trusted brand serving clients across the globe.</p>
                                <button className="btn btn-gradient">About more</button>
                            </motion.div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <motion.h4 initial={{ opacity: 0 ,y: -20}} whileInView={{ opacity: 1,y: 0}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear',delay:1}} className='mt-5 mb-4 text-center text-secondary' >Milestones That Define Us</motion.h4>
                            <motion.div initial={{ opacity: 0 ,scale: 0}} whileInView={{ opacity: 1,scale: 1}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear',delay:1.2}} onViewportEnter={() => setVisible(true)} className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                                {Data.Counters.map((items, index) => (
                                    <div key={index} className="text-center">
                                        {visible &&(
                                            <CountUp start={0} end={items.counting} delay={2.2} duration={5} className='text-primary fw-semibold fs-2' />
                                        )}
                                        <span className="fs-1 text-primary">+</span>
                                        <p className="text-secondary mb-0">{items.field}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUs
