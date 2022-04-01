import React from 'react'

const ErrorPage = (props) => {
  const {message} = props;
  return (
    <div className="flex-row flex-align-item-center flex-justify-content-center">
      <h2>{message}</h2>
    </div>
  )
}

export default ErrorPage
