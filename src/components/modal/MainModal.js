import React, { Component } from 'react'
import img from "../../images/modalImg.png"
import ModalCloseSvg from '../../svg/ModalCloseSvg'
import sideImg from "../../images/modalSide.png"
export class MainModal extends Component {
  render() {
    const {closeModal=()=>{}} = this.props;
    return (
      <div className='background_shadow flex items-center justify-center'>
        <div style={{ overflowX:'hidden' }} className='w-[966px] rounded-[4px] relative max-h-[70vh] overflow-auto  pt-[26px] pb-[26px] pl-[100px] max-[800px]:pl-[26px] max-[650px]:pl-[16px]  max-[650px]:pr-[16px]  bg-white max-[966px]:ml-[20px] max-[966px]:mr-[20px] flex justify-between'>
            <div className='flex max-[650px]:flex-col max-[650px]:w-[100%] max-[650px]:w-[100%]'>
                <img src={img} alt="img" className='max-[650px]:w-[100%] max-[650px]:mt-[80px]' />
                <div >
                    <h2 className='font-black text-[var(--primary2)] max-[650px]:text-center max-[650px]:max-w-[100%] max-[650px]:ml-[0px]  max-[650px]:mt-[20px] text-[20px] max-w-[250px] ml-[32px]'>Dostunuzu gətirin, endirim qazan</h2>
                    <p className='text-[16px] max-[650px]:mb-[30px] font-medium ml-[32px] mt-[10px] max-w-[447px] mr-[50px] max-[650px]:text-center max-[650px]:max-w-[100%] max-[650px]:ml-[0px]  max-[650px]:mt-[20px] text-[20px] max-w-[250px] ml-[32px] max-[650px]:mr-[0px]'>
                    Bizi doğmalarınıza, dostlarınıza, həmkarlarınıza tövsiyə edin və təhsil haqqından 20%-ə qədər qənaət əldə edin!
                    Endirim həm özünüz üçün və həm də dostunuzun ilk təhsil haqqı üçün keçərlidir.
                    Bu aksiya qrup təlimlərinə şamil edilir.
                    Endirimi davam etdirmək üçün yeni dostlara müraciətiniz məhdudiyyətsizdir.
                    Digər aksiyalar ilə birləşdirilə bilməz.
                    </p>
                </div>
            </div>
                  <button onClick={()=>closeModal()} className='mr-[20px] absolute top-0 right-0 mt-[20px]'>
                    <ModalCloseSvg />
                  </button>
                  <img src={sideImg} alt="img" className='max-[650px]:hidden mt-[50px] min-w-[144px] w-[144px] absolute h-[294px] right-[-76px]'  />
        </div>
      </div>
    )
  }
}

export default MainModal