import React from 'react'
import { useDocumentTitle } from '../../helpers/helpers'

const Page404 = () => {
  useDocumentTitle("Trek Flix | 404 Page not found")
  return (
    <div className="flex-row flex-align-item-center flex-justify-content-center">
      <h2 style={{textAlign:'center'}}>Page not found!</h2>
    </div>
  )
}

export default Page404