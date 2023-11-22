import React, { Component } from 'react'
import LeftSvg from '../../svg/LeftSvg';
import RightSvg from '../../svg/RightSvg';
import SliderCard from '../cards/SliderCard';
import SectionHeader from '../SectionHeader';

export class BenefitsSection extends Component {
    state={
        page:0,
        sliderCont: React.createRef()
    }
    changePage=(page)=>{
        this.setState({page:page})
        this.slide(page, this.state.sliderCont)
    }
    slide(index, sliderCont){
      for(let i = 0; i < sliderCont.current.children.length; i++){
        const card = sliderCont.current.children[i];
        var positionInfo = card.getBoundingClientRect();
        var width = positionInfo.width;
        sliderCont.current.children[i].style.transform =  `translateX(-${width*index}px)`
      }
    }
    changeSlider=(type, index, sliderCont)=>{
      let inc = index;
      if(type === "left"){
        if(inc>0){
          inc--;
        }else{
          inc=4
        }
      }else{
        if(inc<4){
          inc++;
        }else{
          inc=0
        }
      }
      this.setState({page:inc})
      this.slide(inc, sliderCont)
    }
  render() {
    const {page, sliderCont} = this.state;
    return (
      <section>
        <SectionHeader title="FAYDALAR" />

        <div  className='container pb-[48px]'>
          <div style={{ overflowX:'auto' }} className='flex border-b border-[1px] border-[white] border-b-[var(--primary2)]'>
              <button onClick={this.changePage.bind(this, 0)} className={`p-[8px] ${page === 0? "font-bold border-b-[var(--primary2)]":"font-regular border-b-[white]"} text-[18px] min-w-[170px] border-b border-b-[4.5px] text-[var(--primary2)]`}>Strateji düşüncə</button>
              <button onClick={this.changePage.bind(this, 1)} className={`p-[8px] ${page === 1? "font-bold border-b-[var(--primary2)]":"font-regular border-b-[white]"} text-[18px] min-w-[202px] border-b border-b-[4.5px] text-[var(--primary2)]`}>Vaxtın idarə edilməsi</button>
              <button onClick={this.changePage.bind(this, 2)} className={`p-[8px] ${page === 2? "font-bold border-b-[var(--primary2)]":"font-regular border-b-[white]"} text-[18px] min-w-[210px] border-b border-b-[4.5px] text-[var(--primary2)]`}>Əzm və konsentrasiya</button>
              <button onClick={this.changePage.bind(this, 3)} className={`p-[8px] ${page === 3? "font-bold border-b-[var(--primary2)]":"font-regular border-b-[white]"} text-[18px] min-w-[230px] border-b border-b-[4.5px] text-[var(--primary2)]`}>Ardıcıl qərar qəbul etmə</button>
              <button onClick={this.changePage.bind(this, 4)} className={`p-[8px] ${page === 4? "font-bold border-b-[var(--primary2)]":"font-regular border-b-[white]"} text-[18px] min-w-[186px] border-b border-b-[4.5px] text-[var(--primary2)]`}>Emosional intellekt</button>
          </div>
          <div className='flex justify-between items-center mt-[36px]'>
              <button className='max-[500px]:hidden' onClick={this.changeSlider.bind(this, "left", page, sliderCont)}>
                  <LeftSvg />
              </button>
              <div ref={sliderCont} className='flex max-w-[968px] overflow-hidden'>
                  <SliderCard />
                  <SliderCard />
                  <SliderCard />
                  <SliderCard />
                  <SliderCard />
              </div>
              <button className='max-[500px]:hidden' onClick={this.changeSlider.bind(this, "right", page, sliderCont)}>
                  <RightSvg />
              </button>
          </div>
          <div className='mt-[40px]  justify-center hidden max-[500px]:flex items-center gap-[40px]'>
            <button className='h-[4px] w-[70px] bg-[var(--primary2)]'  onClick={this.changeSlider.bind(this, "left", page, sliderCont)}></button>
            <button className='h-[4px] w-[70px] bg-[var(--primary2)]' onClick={this.changeSlider.bind(this, "right", page, sliderCont)}></button>
          </div>
        </div>
      </section>
    )
  }
}

export default BenefitsSection