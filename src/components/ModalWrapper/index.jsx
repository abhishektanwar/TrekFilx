import React, { useContext, useRef } from "react";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import {ReactComponent as Close} from '../../assets/close.svg'
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
=        {children}
      <button
        className="modal-close-button"
        onClick={() => handleModalClose()}
      >
        <Close />
      </button>
    </div>
  ) : null;
};

export default ModalWrapper;
