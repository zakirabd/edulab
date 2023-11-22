import React, { Component } from 'react'
import img from "../../images/userInfo.png"
import gold from "../../images/gold.png"
import silver from "../../images/silver.png"
import bronze from "../../images/bronze.png"
import rumFlag from "../../images/rumFlag.png"
import EarthSvg from '../../svg/EarthSvg'
import MedalSvg from '../../svg/MedalSvg'
import ModalCloseSvg from '../../svg/ModalCloseSvg'
export class InfoModal extends Component {
  render() {
    const {closeModal} = this.props
    return (
      <div className='background_shadow flex items-center justify-center'>
       <div style={{ overflowX:'hidden' }} className='max-[960px]:ml-[20px] max-h-[70vh] max-[960px]:mr-[20px] rounded-[4px] bg-white relative max-w-[966px]   pt-[26px] pb-[26px] '>
            <button onClick={()=>closeModal()} className='mr-[20px] absolute top-0 right-0 mt-[20px]'>
                <ModalCloseSvg />
            </button>
            <div className=' pl-[100px] pr-[100px] max-[960px]:pl-[20px] max-[830px]:mt-[60px] max-[960px]:pr-[20px] h-[280px] max-[830px]:h-auto'>
                <div className='grid grid-cols-2 gap-[32px]  max-[830px]:grid-cols-1 '>
                    <img src={img} alt="Image" className='w-[100%] h-auto' />
                    <div>
                        <h2 className='text-[var(--primary2)] font-black text-[28px]'>Qədir Hüseynov</h2>
                        <p className='font-regular text-[16px] text-[var(--black2)] mt-[20px]'>Müstəqil Azərbaycanın
                            ilk qızıl medalı alan şahmatçısı.
                            Azərbaycanın Milli Şahmat Komandasının üzvü, Dördqat Avropa Çempionu
                            Maksimal reytinqi 2667 (sentyabr 2009)</p>
                        <div className='flex gap-[32px] mt-[32px] flex-wrap'> 
                            <div className='flex gap-[4px] items-center'>
                                <img src={gold} />
                                <span className='font-regular text-[16px] text-[var(--black2)]'>4 Qızıl</span>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <img src={silver} />
                                <span className='font-regular text-[16px] text-[var(--black2)]'>4 Gümüş</span>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <img src={bronze} />
                                <span className='font-regular text-[16px] text-[var(--black2)]'>Bürünc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[var(--primary)] mt-[32px] mb-[32px]'></div>
            <div style={{ height: 'calc(70vh - 280px)' }} className='overflow-auto h-[200px]'>
                <div className=' pl-[100px] pr-[100px] max-[960px]:pl-[20px]  max-[960px]:pr-[20px]'>
                    <div className='grid grid-cols-2 gap-[32px]  max-[830px]:grid-cols-1'>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                    </div>
                    <div className='bg-[#FFC35B] pt-[10px] pb-[10px] flex items-center gap-[20px] justify-center rounded-[8px] mt-[30px] mb-[30px]'>
                        <EarthSvg />
                        <span  className='font-medium text-[20px]'>2015</span>
                        <span  className='font-regular text-[16px] text-[var(--black2)]'>18 yaşında</span>
                        <span  className='font-medium text-[20px]'>TOP 100</span>
                        <MedalSvg />
                    </div>
                    <div className='grid grid-cols-2 gap-[32px] max-[830px]:grid-cols-1'>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                        <div className='shadow p-[16px] rounded-[8px]'>
                            <div className='flex items-center gap-[4px] justify-center'>
                                <img className='w-[32px] h-[32px]' src={rumFlag} />
                                <span className='font-medium text-[20px]'>1994</span>
                                <span className='font-regular text-[16px] text-[var(--black2)]'>8 yaşında</span>
                            </div>
                            <p className='font-regular text-[16px] text-[var(--black2)] mt-[18px] text-center'>Rumıniyanın Bayle-Herkulan şəhərində keçirilən gənclər arasında Avropa çempionatında qalib gələrək dünyada ən gənc Fide Master oldu. (Bu rekord 2013-cü ildə yenilənib).</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}

export default InfoModal