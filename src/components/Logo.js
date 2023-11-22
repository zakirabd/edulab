import React, { Component } from 'react'
import logo from "../images/logo.png"
export class Logo extends Component {
  render() {
    return (
      <img alt="logo" src={logo} className='h-[38px] w-[216px]' />
    )
  }
}

export default Logo