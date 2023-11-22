import React, { Component } from 'react'
import img from "../../images/userImg.png"
export class card4 extends Component {
  render() {
    const {openModal=()=>{}} = this.props;
    return (
        <div className='flex flex-col items-center'>
            <img src={img} alt="Image" className='w-[168px] h-[168px] rounded-full ' />
            <h3 className='mt-[40px] font-bold text-[24px] text-[var(--primary2)]'>Qədir Hüseynov</h3>
            <span className='mt-[4px] font-medium text-[14px] text-[var(--primary2)]'>Qrossmeyster</span>
            <button onClick={()=>openModal()} className='font-medium mt-[16px] text-[16px] w-[143px]  h-[56px] rounded-[8px] border border-[var(--primary)]'>
            Ətraflı oxu
          </button>
        </div>
    )
  }
}

export default card4