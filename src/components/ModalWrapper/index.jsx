import React, { useContext, useRef } from "react";
import { useModal } from "../../Contexts/ModalContext";
import "./modal-wrapper.css";
const ModalWrapper = ({ children }) => {
  const modalRef = useRef();
  const {isModalVisible,hideModal} = useModal();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      hideModal();
    }
  };
  return isModalVisible ? (
    <div className="modal-background" onClick={closeModal} ref={modalRef}>
      {/* <div className="modal-wrapper"> */}
        {children}
      {/* </div> */}
      <button
        className="modal-close-button"
        onClick={() => hideModal()}
      >
        X
      </button>
    </div>
  ) : null;
};

export default ModalWrapper;
