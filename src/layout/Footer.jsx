import React from 'react'
import { Container, Row, Col, Form, InputGroup, Button, Image } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../data/data.json"
import logo from '../assets/logo-light.png';
import playstore from "../assets/playstore.png"
import apple from "../assets/apple.png"

const appicon = {
  "playstore": playstore,
  "apple": apple
}

const Footer = () => {
  return (
    <>
      <footer>
        <section className='footer-section bg-primary text-light pt-5 pb-3 overflow-hidden'>
          <Container>
            <Row>
              <Col xs={12}>
                <div className='d-md-flex justify-content-md-between align-items-md-center mb-4'>
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                    <Image height={20} src={logo} alt="..." className='mb-2' />
                    <p className='mb-md-0 text-light'>Empowering businesses with innovative solutions and strategic guidance.</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }}>
                    <p className="mb-1">See our new update</p>
                    <Form>
                      <InputGroup className="mb-0">
                        <Form.Control
                          placeholder="Email here..."
                          aria-label="Recipient's Email"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                          <i className="ri-arrow-right-line input-icon"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Form>
                  </motion.div>
                </div>
              </Col>
              <hr />
              {Data.footerData.map((items, index) => (
                <Col sm={6} xs={12} key={index} className={`${items.class} mb-4`}>
                  <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'linear', delay: 0.5 }} className='mb-2'>{items.title}</motion.h5>
                  <ul className='list-group list-unstyled lh-lg'>
                    {items.links.map((link, index) => (
                      <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: index * 0.3 }} className='item-list' key={index}><a href={link.href} className="footer-nav-link">{link.text}</a></motion.li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col lg={4} sm={6} xs={12} className='mb-4'>
                {Data.footerContact.map((items, index) => (
                  <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'linear', delay: index * 0.5 }} >
                    <div className="d-flex align-items-center mb-1">
                      <i className={`${items.icon} fs-5`}></i>
                      <h5 className="ms-2 mb-0">{items.title}</h5>
                    </div>
                    {
                      items.type === "phone" && (
                        <p>{items.content}</p>
                      )
                    }
                    {
                      items.type === "location" && (
                        <address>{items.content}</address>
                      )
                    }
                    {
                      items.type === "email" && (
                        <p>{items.content}</p>
                      )
                    }
                  </motion.div>
                ))}
              </Col>

              <Col xs={12}>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {Data.footerButton.map((items, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0 ,x: index === 0 ? -100 : index === 1 && 100 }} whileInView={{ opacity: 1, scale: 1 , x: 0}} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear'}}>
                      <Button href={items.href} className="d-inline-flex gap-2 align-items-center bg-white text-dark text-decoration-none p-2" target="_blank" rel="noreferrer">
                        <Image src={appicon[items.src]} alt="..." />
                        <div>
                          <small className="text-secondary">Install now</small>
                          <h5 className="fw-bold lh-1 mb-0">{items.text}</h5>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='footer-tagline text-light text-center py-4 overflow-hidden'>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="d-lg-flex justify-content-lg-between justify-content-center align-items-center">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-md-0 mb-2'>
                    <p className="mb-0 me-md-2 me-0">Copyright © 2023 All rights reserved | Block is made with by</p>
                    <Image height={20} src={logo} alt="..." />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: 0.1 }} className="d-flex justify-content-center align-items-center overflow-hidden">
                    {Data.socialIconData.slice(2).map((items, index) => (
                      <a key={index} href={items.href} target="_blank" rel="noreferrer"  className={`socialContainer ${items.class} m-2`}>
                        <div className="icon">
                          <i className={`${items.icon} fs-4`}></i>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  )
}

export default Footer
