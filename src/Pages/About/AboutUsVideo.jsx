import React from "react";
import Modal from "react-bootstrap/Modal";
import "./About.css"

const AboutUsVideo = (props) => {
 const {modalShow,setModalShow} = props;
  return (
    <div>
      <Modal
        show={modalShow}
        variant={"dark"}
        size="lg"
        centered
        className="my-modal"
      >
        <Modal.Header closeButton closeVariant="white" onClick={() => setModalShow(false)}>
        </Modal.Header>
        <Modal.Body>
        <iframe
              title="aboutUs Video"
              style={{marginLeft:"-8px"}}
              width="780"
              height="400"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
            ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AboutUsVideo;
