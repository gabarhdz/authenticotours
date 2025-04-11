import React from 'react'
import './Summarize.css'

const Summarize = ({average,comment}) => {
    console.log(average)
    console.log(comment)
  return (
    <div>
    <div>
        <div>{average}</div>
        <div>{comment} comments</div>
    </div>
    <span>Excelent </span>
    <span>Very Good </span>
    <span>Normal </span>
    <span>Bad </span>
    <span>Terrible </span>
    </div>
  )
}

export default Summarize