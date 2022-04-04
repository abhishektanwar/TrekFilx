import React, { useState } from 'react';

export const useAuthDialog = () => {
  const [authType,setAuthType] = useState(false);
  const [creds,setCreds] = useState({});

  const handleAuthCreds = (e) => {
    // setCreds(credentials => {...credentials,e.target.name:e.target.value}))
    // setCreds((e) => {...creds,e.targe.name:e.target.value})

  }
  return ({authType,setAuthType})
}