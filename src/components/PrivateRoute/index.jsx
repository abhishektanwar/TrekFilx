import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../Contexts/AuthDialogContext'
import { useModal } from '../../Contexts/ModalContext';

const PrivateRoute = () => {
  const {user,setAuthType} = useAuth();
  const { showModal } = useModal();
  const loginHandler = () => {
    showModal();
    setAuthType("login");
  }
  return (
    <>
    {
      user.isAuthenticated ? <Outlet /> : (
        <>
        <Navigate to="/" />
        {loginHandler()}
        </>
      )
    }
    </>
  )
}

export default PrivateRoute
