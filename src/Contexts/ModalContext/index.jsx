import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext();

const ModalProvider = ({children}) => {
  const [isModalVisible,setIsModalVisible] = useState(false);

  const hideModal = () => {
    setIsModalVisible(false)
  }

  const showModal = () =>{
    setIsModalVisible(true);
  }
  return (
    <ModalContext.Provider value={{isModalVisible,hideModal,showModal}}>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext);

export {ModalProvider, useModal};