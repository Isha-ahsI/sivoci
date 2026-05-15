import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Data from '../../data/data.json';
import CountUp from 'react-countup';
import { motion } from "motion/react"
import HeroImg from '../../assets/hero-img.png';
import avatar1 from "../../assets/user_images/user1.jpg"
import avatar2 from "../../assets/user_images/user2.jpg"
import avatar3 from "../../assets/user_images/user3.jpg"
import avatar4 from "../../assets/user_images/user4.jpg"
import avatar5 from "../../assets/user_images/user5.jpg"
import avatar6 from "../../assets/user_images/user6.jpg"
import avatar7 from "../../assets/user_images/user7.jpg"
import avatar8 from "../../assets/user_images/user8.jpg"
import avatar9 from "../../assets/user_images/user9.jpg"
import avatar10 from "../../assets/user_images/user10.jpg"


const orbitImage = {
  "avatar1": avatar1,
  "avatar2": avatar2,
  "avatar3": avatar3,
  "avatar4": avatar4,
  "avatar5": avatar5,
  "avatar6": avatar6,
  "avatar7": avatar7,
  "avatar8": avatar8,
  "avatar9": avatar9,
  "avatar10": avatar10
}



const HeroSection = () => {
  const orbitLevels = ["inner", "middle", "outer"];

  return (
    <>
      <section className="hero-section-primary min-vh-100 d-flex align-items-center overflow-hidden" id='home'>
        <Container>
          <Row className="align-items-center">
            <Col xl={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} >
              <motion.div className="hero-content text-xl-start text-center mb-xl-0 mb-5" initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1,ease: 'linear', delay: 0.1 }} >
                <div className="mb-4">
                  <h1 className="text-gradiant display-5 fw-medium">Smart <span className="display-4 fw-bold">Strategies</span> to</h1>
                  <h1 className="text-gradiant display-5 fw-medium">Fuel Business <span className="display-4 fw-bold">Growth</span></h1>
                </div>
                <p className="text-primary mb-4">We blend creative thinking with proven strategies to help your business
                  grow smarter and faster — turning bold ideas into measurable results.</p>
                <div className="d-sm-flex justify-content-xl-start justify-content-sm-center align-items-sm-center text-sm-start">
                  <ul className="list-1 list-unstyled text-primary pe-sm-4 mb-sm-4 mb-0 lh-lg">
                    {Data.highlights.slice(0, -3).map((items, idx) => (
                      <li className="item-list" key={idx}>
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>{items.text}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="list-2 list-unstyled text-primary ps-sm-4 mb-4 lh-lg">
                    {Data.highlights.slice(-3).map((items, idx) => (
                      <li className="item-list" key={idx}>
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>{items.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-gradient">Explore more</button>
              </motion.div>
            </Col>
            <Col xl={{ span: 5, order: 2, offset: 1 }} xs={{ span: 12, order: 1 }}>
              <motion.div className="position-relative d-sm-flex justify-content-sm-center my-5" initial={{ opacity: 0 ,scale: 0 }} whileInView={{opacity: 1 ,scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                <div className="orbit-container position-relative d-none d-sm-block">
                  {orbitLevels.map((orbit) => (
                    <div key={orbit} className={`orbit orbit-${orbit}`}>
                      {Data.userImages
                        .filter((item) => item.orbit === orbit)
                        .map((item, index) =>
                          item.type === "dot" ? (
                            <div key={index} className={`orbit-dots ${item.className}`}></div>
                          ) : (
                            <div key={index} className={`orbit-img ${item.className}`}>
                              <Image src={orbitImage[item.src]} alt={`user-${index + 1}`} />
                            </div>
                          )
                        )}
                    </div>
                  ))}
                </div>
                <div className="d-sm-none d-block">
                  <Image src={HeroImg} alt="..." className="img-fluid" />
                </div>
                <div className="metric position-absolute text-center">
                  {/* <CountUp start={0} end={20000} delay={1} duration={5} separator="," formattingFn={(value) => {
                    if (value >= 20000) {
                      return (value / 1000).toFixed(0) + 'k';
                    }
                    return value;
                  }} >
                    {({ countUpRef }) => (
                      <div>
                        <h2 className="text-primary fw-semibold" ref={countUpRef}>0</h2>
                        <p className="text-secondary mb-0">Growth</p>
                      </div>
                    )}
                  </CountUp> */}
                  <CountUp start={0} end={20000} duration={5} delay={1}>
      {({ countUpRef }) => (
        <div>
          <h2 className="text-primary fw-semibold" ref={countUpRef} />
          <p className="text-secondary mb-0">Growth</p>
        </div>
      )}
    </CountUp>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroSection

