import React, { Component } from 'react'
import HeaderSliderCard from '../HeaderSliderCard'

export class HeaderSection extends Component {
  state={
    sliderCont: React.createRef(), 
    page:'left'
  }
  sliderBtn=(type, sliderCont)=>{
    this.setState({page:type})
    for(let i = 0; i < sliderCont.current.children.length; i++){
       const card = sliderCont.current.children[i];
      var positionInfo = card.getBoundingClientRect();
      var width = positionInfo.width;
      sliderCont.current.children[i].style.transform =  `translateX(${type === "left"? '0px':`-${width+20}px`} )`
    }
   
  }
  render() {
    const {sliderCont, page} = this.state;
    return (
      <section className='h-[110vh] max-[800px]:h-auto max-[800px]:pb-[40px] w-full bg-[var(--gray)] pt-[50px] '>
        <div className='container flex  overflow-hidden' ref={sliderCont}>
           <HeaderSliderCard />
           <HeaderSliderCard />
        </div>
        <div className='flex items-center justify-center gap-[32px] max-[800px]:mt-[40px]'>
            <button onClick={this.sliderBtn.bind(this, "left", sliderCont)} className={`w-[168px] h-[4px] ${page === "left"?'bg-[var(--primary2)]':"bg-[var(--light-purple)]" }  max-[500px]:w-[100px] `}></button>
            <button onClick={this.sliderBtn.bind(this, "right", sliderCont)} className={`w-[168px] h-[4px] ${page === "right"?'bg-[var(--primary2)]':"bg-[var(--light-purple)]" }  max-[500px]:w-[100px]`}></button>
        </div>
      </section>
    )
  }
}

export default HeaderSection