import React, { Component } from 'react'
export class Card1 extends Component {
 
  render() {
    const {img, title, desc, btn=false, height=false, imgH="200px", openModal=()=>{}} = this.props;
    return (
      <div className={`${height? "h-[528px]":""} flex flex-col justify-between max-[700px]:items-center`}>
        <div>
            <img src={img} alt="Img" className={`w-[100%] h-[${imgH}] rounded-[8px]`} />
            <div className='pl-[16px] pr-[16px]'>
                <h3 className='text-[var(--primary2)] font-bold text-[24px] w-[247px] mt-[24px] max-[700px]:text-center max-[700px]:w-full'>{title}</h3>
                <p className='mt-[8px] font-light text-[16px] text-[var(--black2)] max-[700px]:text-center'>{desc}</p>
            </div>
        </div>
        {
          btn?
          <button onClick={()=>openModal()} className='font-medium text-[16px] w-[143px] ml-[16px] h-[56px] rounded-[8px] border border-[var(--primary)]'>
            Ətraflı oxu
          </button>:null
        }
        
      </div>
    )
  }
}

export default Card1