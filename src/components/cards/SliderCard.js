import React, { Component } from 'react'
import img from "../../images/slideImg.png"
export class SliderCard extends Component {
  render() {
    return (
      <div style={{ transition:'1s' }} className='flex items-center gap-[48px] min-w-[100%] max-[900px]:flex-col'>
        <img src={img} alt="Image" className='w-[468px] rounded-[8px] max-[900px]:w-full' />
        <div>
            <h3 className='mt-[8px] font-bold text-[24px] text-[var(--primary2)] max-[900px]:text-center'>Helikopter Baxışı</h3>
            <span className='mt-[4px] font-medium text-[14px] block text-[var(--primary2)] max-[900px]:text-center '>Çətin tapşırıqlardan qorxmayın</span>
            <p className='mt-[12px] text-[16px] font-regular text-[var(--black2)] max-[900px]:text-center'>Oyunçu bütün lövhəni görür, özünün və rəqibinin hərəkətlərini əvvəlcədən hesablayır. Oyunun gedişində oyunçular daha əhəmiyyətli olanları saxlamaq və əsas məqsədə çatmaq üçün daha az əhəmiyyətli fiqurları qurban verməlidirlər. Buna adi həyatdan misal: cib xərcliyini fast fooda xərcləmək və ya qənaət edib velosiped üçün pul yığmaq.</p>
        </div>
      </div>
    )
  }
}

export default SliderCard