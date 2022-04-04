import React, { useContext, useRef } from "react";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import "./modal-wrapper.css";
const ModalWrapper = ({children}) => {
  const modalRef = useRef();
  const {isModalVisible,hideModal} = useModal();
  const {setAuthType} = useAuth()
  const {setShowPlaylistCreationModal} = usePlaylist();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      hideModal();
    }
  };
  const handleModalClose = () => {
    setAuthType(false)
    setShowPlaylistCreationModal(false)
    hideModal()
  }
  return isModalVisible ? (
    <div className="modal-background" onClick={closeModal} ref={modalRef}>
      {/* <div className="modal-wrapper"> */}
        {children}
      {/* </div> */}
      <button
        className="modal-close-button"
        onClick={() => handleModalClose()}
      >
        X
      </button>
    </div>
  ) : null;
};

export default ModalWrapper;
