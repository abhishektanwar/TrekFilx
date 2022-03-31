import React, { createContext, useContext, useState } from "react";
import Login from "../../components/Authentication/Login";
import SignUp from "../../components/Authentication/SignUp";
import ModalWrapper from "../../components/ModalWrapper";
import axios from "axios";
import utils from '../../utils'
export const AuthContext = createContext({
  showModal: false,
  setShowModal: () => {},
  authType: null,
  setAuthType: () => {},
});

export const AuthProvider = (props) => {
  const [authType, setAuthType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ errorExists: false, errorMessage: "" });
  const [user,setUser] = useState(null);

  const loginHandler = async (user) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      console.log("login requrest resp",res);
      if(res.statusText==='OK'){
        utils.setLocalStorage('authToken',res.data.encodedToken);
        setIsLoading(false);
        setError({errorExists:false,errorMessage:''})
        setUser(res.data.foundUser)
        return true;
      }
    } catch (e) {
      setError({errorExists:true,errorMessage:"Invalid Credentials. Please try again"});
      setIsLoading(false);
    }
  };

  const logoutHandler = () => {
    utils.removeLocalStorage('authToken')
		setUser(null);
  };
  
  const signUpHandler = async (user) => {
    setIsLoading(true);
    try{
      const res = await axios.post('/api/auth/signup',{
        email: user.email,
        password: user.password,
      })
      if(res.statusText==='Created'){
        setUser(res.data.createdUser)
        utils.setLocalStorage('authToken',res.data.encodedToken);
        setError({errorExists:false,errorMessage:''})
        setIsLoading(false)
        return true;
      }
    }
    catch(e){
      setError({errorExists:true,errorMessage:"Something went wront. Please try again"});
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user,authType, setAuthType,loginHandler, signUpHandler,logoutHandler,error }}>
      <ModalWrapper>
        {user  && user.email}
        {user && user.password}
        {authType === "login" ? <Login /> : <SignUp />}
      </ModalWrapper>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
