import React from 'react'
import { Image, Modal } from 'react-bootstrap'
import Data from "../data/data.json"
import { useModal } from '../context/ModalContext'
import user1 from "../assets/user_images/user1.jpg"
import user2 from "../assets/user_images/user2.jpg"
import user3 from "../assets/user_images/user3.jpg"
import user4 from "../assets/user_images/user4.jpg"
import user5 from "../assets/user_images/user5.jpg"
import user6 from "../assets/user_images/user6.jpg"
import user7 from "../assets/user_images/user7.jpg"
import user8 from "../assets/user_images/user8.jpg"
import user9 from "../assets/user_images/user9.jpg"
import user10 from "../assets/user_images/user10.jpg"
import user11 from "../assets/user_images/user11.jpg"
import user12 from "../assets/user_images/user12.jpg"
import user13 from "../assets/user_images/user13.jpg"
import user14 from "../assets/user_images/user14.jpg"
import user15 from "../assets/user_images/user15.jpg"


const userImg = {
    'user1.jpg': user1,
    'user2.jpg': user2,
    'user3.jpg': user3,
    'user4.jpg': user4,
    'user5.jpg': user5,
    'user6.jpg': user6,
    'user7.jpg': user7,
    'user8.jpg': user8,
    'user9.jpg': user9,
    'user10.jpg': user10,
    'user11.jpg': user11,
    'user12.jpg': user12,
    'user13.jpg': user13,
    'user14.jpg': user14,
    'user15.jpg': user15,
};

const TeamInfo = () => {
    const { showInfo, handleClose, selectedUserIndex } = useModal()
    return (
        <>
            <Modal
                show={showInfo}
                onHide={handleClose}
                centered
                backdrop="static"
                keyboard={false}
                className="team-info-modal "
            >
                {selectedUserIndex !== null && (
                    <>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn-close top-0 end-0 position-absolute mt-3 me-3 z-2"
                        ></button>

                        <Modal.Body className="text-center">
                            <Image
                                src={userImg[Data.userInfo[selectedUserIndex].src]}
                                alt="..."
                                className="img-wrapper mb-2"
                            />

                            <h3 className="text-success">
                                {Data.userInfo[selectedUserIndex].name}
                            </h3>

                            <h6 className="text-secondary">
                                {Data.userInfo[selectedUserIndex].position}
                            </h6>

                            <small className="text-secondary d-block mb-2">
                                As the {Data.userInfo[selectedUserIndex].position}, I lead our team
                                to deliver smart, growth-driven solutions that create lasting impact.
                            </small>

                            <hr />

                            <h6 className="text-primary">
                                {`${Data.userInfo[selectedUserIndex].name
                                    .toLowerCase()
                                    .replace(/\s/g, '')}@gmail.com`}
                            </h6>

                            <div className="d-flex justify-content-center align-items-center flex-wrap overflow-hidden mt-3">
                                {Data.socialIconData.slice(0, -2).map((items, index) => (
                                    <a
                                        href={items.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={index}
                                        className={`socialContainer ${items.class} me-2 my-2`}
                                    >
                                        <div className="icon">
                                            <i className={`${items.icon} fs-4`}></i>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </Modal.Body>
                    </>
                )}
            </Modal>



        </>
    )
}

export default TeamInfo
