import React, { Component } from 'react'
import img from "../images/headerImg.png"
export class HeaderSliderCard extends Component {
  render() {
    return (
      <div style={{ transition:'1s' }} className=' min-w-full flex items-center gap-[33px] max-[800px]:flex-col max-[800px]:mr-[20px] max-[800px]:items-center'>
        <img src={img} className='max-w-[567px] max-[1181px]:max-w-[467px] max-[960px]:max-w-[400px] max-[800px]:ml-auto max-[800px]:mr-auto max-[500px]:w-[304px]' />
        <div className=''>
            <h1 className='font-extrabold text-[76px] max-[1181px]:text-[60px]  max-[960px]:text-[48px]  max-w-[548px] text-wrap max-[800px]:text-center max-[500px]:text-[24px]'>
            MƏNTİQLİ DÜŞÜNMƏYİ ÖYRƏDİRİK
            </h1>
            <p className='font-regular text-[16px] max-w-[300px] max-[800px]:text-center max-[800px]:max-w-full'>Biz yalnız şahmat oynamağı öyrətmirik,
                biz məntiqli düşünməyi öyrədirik!</p>
        </div>
      </div>    
    )
  }
}

export default HeaderSliderCard