import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Data from "../../data/data.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import logo1 from "../../assets/b_logo/logo_1.png"
import logo2 from "../../assets/b_logo/logo_2.png"
import logo3 from "../../assets/b_logo/logo_3.png"
import logo4 from "../../assets/b_logo/logo_4.png"
import logo5 from "../../assets/b_logo/logo_5.png"
import logo6 from "../../assets/b_logo/logo_6.png"
import logo7 from "../../assets/b_logo/logo_7.png"
import logo8 from "../../assets/b_logo/logo_8.png"
import logo9 from "../../assets/b_logo/logo_9.png"
import logo10 from "../../assets/b_logo/logo_10.png"
import logo11 from "../../assets/b_logo/logo_11.png"
import logo12 from "../../assets/b_logo/logo_12.png"
import { motion } from "motion/react"

const brandsLogo = {
    "logo1":logo1,
    "logo2" :logo2 ,
    "logo3":logo3,
    "logo4":logo4,
    "logo5":logo5,
    "logo6":logo6,
    "logo7":logo7,
    "logo8":logo8,
    "logo9":logo9,
    "logo10":logo10,
    "logo11":logo11,
    "logo12":logo12
}


const TrustedBrands = () => {
    return (
        <>
            <section className='section-lg overflow-hidden'>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <motion.h5 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{ duration: 1, ease: 'linear' }} className="text-center text-success text-decoration-underline mb-5">Trusted By</motion.h5>
                        </Col>
                        <Col xs={12}>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear',delay:0.8 }}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={50}
                                loop={true}
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    reverseDirection: false,
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false}
                                breakpoints={{
                                    0: { slidesPerView: 3 },
                                    576: { slidesPerView: 4 },
                                    768: { slidesPerView: 6 },
                                    992: { slidesPerView: 8 },
                                    1400: { slidesPerView: 10 }
                                }}
                                className="mb-5"
                            >
                                {Data.logoImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={brandsLogo[item.src]} alt={item.Name} className="img-fluid" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                         <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{once:true}} transition={{ duration: 1, ease: 'linear',delay:0.8}}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={40}
                                loop={true}
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    reverseDirection: true,
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false}
                                breakpoints={{
                                    0: { slidesPerView: 3 },
                                    576: { slidesPerView: 4 },
                                    768: { slidesPerView: 6 },
                                    992: { slidesPerView: 8 },
                                    1400: { slidesPerView: 10 }
                                }}
                                className="mb-5"
                            >
                                {Data.logoImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={brandsLogo[item.src]} alt={item.Name} className='img-fluid' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                         </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TrustedBrands
