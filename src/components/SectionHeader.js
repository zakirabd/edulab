import React, { Component } from 'react'
import LogoSvg from '../svg/LogoSvg'

export class SectionHeader extends Component {
  render() {
    const {bgGray=false, title} = this.props
    return (
      <div className='mt-[70px] mb-[40px]  relative'>
        <div className='w-full h-[1px] bg-[var(--primary)]'></div>
        <div className='container flex items-center  mt-[-35px]'>
            <div className={` ${bgGray?"bg-[var(--gray)]":"bg-white"} max-[700px]:ml-auto max-[700px]:mr-auto pt-[12px] pb-[12px] pl-[16px] pr-[16px] flex gap-[16px] items-center`}>
                <LogoSvg />
                <h2 className='font-black text-[28px] max-[700px]:text-[24px]'>{title}</h2>
            </div>
        </div>
      </div>
    )
  }
}

export default SectionHeader