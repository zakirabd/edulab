import React, { Component } from 'react'
import logo from "../../images/logo2.png"
import qr from "../../images/qr.png"
import PhoneSvg from '../../svg/PhoneSvg'
import MobileSvg from '../../svg/MobileSvg'
import MailSvg from '../../svg/MailSvg'
import FbSvg from '../../svg/FbSvg'
import WpSvg from '../../svg/WpSvg'
import TgSvg from '../../svg/TgSvg'
import MapSvg from '../../svg/MapSvg'
export class Footer extends Component {
  render() {
    return (
      <footer>
       <div className='bg-[var(--primary2)] pt-[62px] pb-[50px] flex flex-col items-center'>
        <img src={logo} alt={"Logo"} />
            <div className='mt-[64px]'>
                <ul className='gap-[32px] flex max-[800px]:flex-col items-center'>
                    <li className='flex gap-[16px]'>
                        <PhoneSvg />
                        <span className='font-regular text-[16px] text-white'>+994 12 311 0244</span>
                    </li>
                    <li className='flex gap-[16px]'>
                        <MobileSvg />
                        <span className='font-regular text-[16px] text-white'>+994 10 311 0244</span>
                    </li>
                    <li className='flex gap-[16px]'>
                        <MailSvg />
                        <span className='font-regular text-[16px] text-white'>office@edulab.academy</span>
                    </li>
                    
                <ul  className='gap-[32px] flex'>
                        <li className='flex gap-[16px]'>
                            <FbSvg />
                        </li>
                        <li className='flex gap-[16px]'>
                            <WpSvg />
                        </li>
                        <li className='flex gap-[16px]'>
                            <TgSvg />
                        </li>
                </ul>
                </ul>
            </div>
            <div>
                <p className='flex gap-[10px] text-white text-[16px] font-regular mt-[23px] pl-[20px] pr-[20px] max-[700px]:text-center'>
                    <MapSvg />
                    <span>Nizami rayonu, Şirin Mirzəyev 29  |  “Zəngi” liseyinin yaxınlığı</span>
                </p>
            </div>
            <img className='w-[120px] h-[120px] mt-[48px]' src={qr} />
       </div>
       <div className='h-[100px] bg-white flex items-center justify-center'>
        <span className='text-[16px] font-regular'>www.aist.group</span>
       </div>
      </footer>
    )
  }
}

export default Footer