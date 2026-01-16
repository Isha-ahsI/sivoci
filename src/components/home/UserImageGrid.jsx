import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { motion } from "motion/react"
import Data from "../../data/data.json"
import { useModal } from '../../context/ModalContext'
import user1 from "../../assets/user_images/user1.jpg"
import user2 from "../../assets/user_images/user2.jpg"
import user3 from "../../assets/user_images/user3.jpg"
import user4 from "../../assets/user_images/user4.jpg"
import user5 from "../../assets/user_images/user5.jpg"
import user6 from "../../assets/user_images/user6.jpg"
import user7 from "../../assets/user_images/user7.jpg"
import user8 from "../../assets/user_images/user8.jpg"
import user9 from "../../assets/user_images/user9.jpg"
import user10 from "../../assets/user_images/user10.jpg"
import user11 from "../../assets/user_images/user11.jpg"
import user12 from "../../assets/user_images/user12.jpg"
import user13 from "../../assets/user_images/user13.jpg"
import user14 from "../../assets/user_images/user14.jpg"
import user15 from "../../assets/user_images/user15.jpg"


const userImages = {
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
const UserImageGrid = () => {
  const { handleShowInfo } = useModal()
  return (
    <Row className="g-3">
      {Data.userImageData.map((col, colIndex) => (
        <Col key={`col-${colIndex}`} className={col.column}>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'linear', delay: colIndex * 0.5 }} className={col.className}>
            {col.groups.map((group, groupIndex) => (
              <div key={`group-${colIndex}-${groupIndex}`} className={group.className}>
                {group.users.map((user, userIndex) => (
                  <div
                    key={`user-${colIndex}-${groupIndex}-${userIndex}`}
                    className="img-wrapper position-relative overflow-hidden mb-3">
                    <div className="overlay"></div>
                    <button className="view-user" onClick={() => handleShowInfo(user.index)}>
                      <i className="ri-eye-fill fs-1 text-light"></i>
                    </button>
                    <Image src={userImages[user.src]} alt="..." className="img-fluid" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};
export default UserImageGrid;