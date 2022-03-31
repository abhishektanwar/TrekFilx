import React from 'react'
import Button from '../../components/Buttons/Button'
import VideoCard from '../../components/VideoCard'
import {ReactComponent as DeleteIcon} from '../../assets/delete.svg'
const History = () => {
  return (
    <div>
      <div className="flex-row flex-align-item-center flex-justify-content-space-between">
        <h3>Watch History</h3>
        <Button buttonStyle="secondary-button" icon={<DeleteIcon />} buttonText="Clear All History" />
      </div>
      {/* <div className="flex-column flex-align-item-center">
        {[1,2,3,4,5,6,7,8].map((item)=><VideoCard />)}
      </div> */}
    </div>
  )
}

export default History
