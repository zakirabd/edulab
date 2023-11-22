import React, { Component } from 'react'
import Card1 from '../cards/Card1'
import backImg from "../../images/chessFigures.png"
import img from "../../images/cardimg.png"
import MainModal from '../modal/MainModal'
import SectionHeader from '../SectionHeader'

export class PromotionsSection extends Component {
  state={
    modalVisible:false
  }
  render() {
    const {modalVisible} = this.state;
    return (
      <section >
        <SectionHeader title="AKSİYALAR" />
        <div className='container'>
          <div className='grid grid-cols-3 gap-[32px] max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1'>
            <Card1 openModal={()=>this.setState({modalVisible:true})} height={true} btn={true} img={img} title={"Mükafata bizdən mükafat"} desc={"Reytinq turnirində 1-ci yerin qalibi olmuş tələbəmizə növbəti 2 (iki) ayın təhsil haqqına 100% güzəşt ediləcək."} />
            <Card1 openModal={()=>this.setState({modalVisible:true})} height={true} btn={true} img={img} title={"Mükafata bizdən mükafat"} desc={"Reytinq turnirində 1-ci yerin qalibi olmuş tələbəmizə növbəti 2 (iki) ayın təhsil haqqına 100% güzəşt ediləcək."} />
            <Card1 openModal={()=>this.setState({modalVisible:true})} height={true} btn={true} img={img} title={"Mükafata bizdən mükafat"} desc={"Reytinq turnirində 1-ci yerin qalibi olmuş tələbəmizə növbəti 2 (iki) ayın təhsil haqqına 100% güzəşt ediləcək."} />
          
          </div>
          <img className='mt-[32px]' src={backImg} alt="Back Img" />
          {modalVisible? <MainModal  closeModal={()=>this.setState({modalVisible:false})} />:null}
        </div>
       
      </section>
    )
  }
}

export default PromotionsSection