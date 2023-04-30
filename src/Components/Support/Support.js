import React from 'react'
import './Support.css'



export default function Support(props) {
  return (
    <div className='myinfocard m-5'>
        <img className='info-logo' src={props.product.img} alt="jm," />
        <div className='infotext'>
            <h3 className='info-header'>{props.product.head}</h3>
            <h4 className='info-subheader text-uppercase'>{props.product.subhead}</h4>
        </div>

    </div>
  )
}
