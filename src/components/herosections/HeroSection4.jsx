import React from 'react'
import { Container, Row, Col, Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json"
import left_arrow from "../../assets/arrow_left.svg";
import avatar1 from "../../assets/user_images/user1.jpg"
import avatar3 from "../../assets/user_images/user3.jpg"
import avatar11 from "../../assets/user_images/user11.jpg"

const userImage = {
  "avatar1": avatar1,
  "avatar3": avatar3,
  "avatar11": avatar11
}

const HeroSection4 = () => {

  return (
    <>
      <section className="hero-section-primary4 min-vh-100  d-flex align-items-center overflow-hidden  position-relative">
        <div className="overlay1"></div>
        <motion.div initial={{ opacity: 0, x: -300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'linear', delay: 0.1 }} className="overlay2"></motion.div>
        <Container>
          <Row>
            <Col lg={6} xs={12} className='z-2'>
              <div className="text-lg-start text-center">
                <motion.h1 className="text-success mb-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }}> <span className="text-light display-3 d-inline-block">Innovation</span> for a better</motion.h1>
                <h1 className="mb-4">
                  <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="bg-success p-2 rounded-3 text-primary d-inline-block">Bussiness</motion.span>
                  <motion.span initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="text-light display-2 ms-2 d-inline-block">future</motion.span>
                </h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="text-light mb-4">Empower your business with smart, innovative solutions designed to boost
                  growth and keep you ahead in a fast-changing digital world.</motion.p>
                <div className="position-relative d-flex justify-content-lg-start justify-content-center align-item-center">
                  <motion.div initial={{ opacity: 0 ,x:-30 }} whileInView={{ opacity: 1 ,x:0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }}>
                    <Button variant="success" className='mb-4'>
                      <span>Explore More</span>
                      <i className="ri-arrow-right-line"></i>
                    </Button>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 ,x:30 }} whileInView={{ opacity: 1 ,x:0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="position-absolute arrow-icon2 d-lg-block d-none">
                    <Image src={left_arrow} alt="arrow_left" className="img-fluid" />
                  </motion.div>
                </div>
                <div className="d-flex flex-sm-row flex-column justify-content-lg-start justify-content-center align-items-center">
                  <motion.div initial={{ opacity: 0,x:-30  }} whileInView={{ opacity: 1,x:0  }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="user-avatars d-flex mb-sm-0 mb-3">
                    {Data.userAvatars.map((items, index) => (
                      <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id={`tooltip-${index}`}>{items.tooltip.map((items, index) => (
                        <div key={index}>
                          <h6 className='mb-1'>{items.Name}</h6>
                          <p className='mb-0'>{items.content}</p>
                        </div>
                      ))}</Tooltip>}>
                        {items.type === "image" ?
                          (<Image src={userImage[items.src]} alt="..." key={index} className="user-image"></Image>) :
                          (<div className="user-image d-flex justify-content-center align-items-center fs-4 bg-light text-success" key={index}>
                            <i className="ri-add-line"></i>
                          </div>)}
                      </OverlayTrigger>
                    ))}
                  </motion.div>
                  <motion.div initial={{ opacity: 0,x:30  }} whileInView={{ opacity: 1,x:0  }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.5 }} className="ms-2 text-white">
                    <h5>+20K</h5>
                    <p className="m-0 text-white">Trusted by over <strong>20,000</strong> users</p>
                  </motion.div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection4
