import React, { Component } from 'react'
import Logo from '../Logo'
import Nav from './Nav'
import ChangeLang from './ChangeLang'
import NavSvg from '../../svg/NavSvg'

export class Header extends Component {
  render() {
    return (
      <header className='bg-[var(--gray-2)] h-[72px] flex items-center fixed w-full z-50'>
        <div className='container flex items-center max-[1150px]:justify-between'>
          <Logo />
          <Nav />
          <label htmlFor='respNav' className='cursor-pointer hidden max-[1150px]:inline'>
            <NavSvg />
          </label>
        </div>

      </header>
    )
  }
}

export default Header