import React, { Component } from 'react'
import LangSvg from '../../svg/LangSvg'
import BottomSvg from '../../svg/BottomSvg'

export class ChangeLang extends Component {
  render() {
    return (
      <div className='flex items-center gap-[4px] pt-[12px] ml-[28px] max-[1150px]:ml-[15px]'>
        <LangSvg />
        <span>AZ</span>
        <BottomSvg />
      </div>
    )
  }
}

export default ChangeLang