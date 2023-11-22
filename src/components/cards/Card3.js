import React, { Component } from 'react'

export class Card3 extends Component {
  render() {
    const {title, text} = this.props;
    return (
      <div className='bg-white rounded-[8px] pt-[24px] pl-[24px] pr-[24px] pb-[32px]'>
        <h3 className='font-bold text-[24px] text-[var(--primary2)] max-[700px]:text-center'>{title}</h3>
        <p className='font-regular text-[16px] text-[var(--black2)] mt-[8px] max-[700px]:text-center'>{text}</p>
      </div>
    )
  }
}

export default Card3