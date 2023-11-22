import React, { Component } from 'react'
import Card4 from '../cards/Card4'
import MainModal from '../modal/MainModal';
import SectionHeader from '../SectionHeader';

export class TrainerSection extends Component {
  state={
    modalVisible:false
  }
  render() {
    const {modalVisible} = this.state;

    return (
      <section > 
        <SectionHeader title="MƏŞQÇİLƏR" />
        <div className='container pb-[40px]'>
          <div className='grid grid-cols-4 gap-[102px] max-[1200px]:gap-[40px] max-[900px]:grid-cols-2 max-[500px]:grid-cols-1'>
              <Card4 openModal={()=>this.setState({modalVisible:true})} />
              <Card4 openModal={()=>this.setState({modalVisible:true})} />
              <Card4 openModal={()=>this.setState({modalVisible:true})} />
              <Card4 openModal={()=>this.setState({modalVisible:true})} />
          </div>
          {modalVisible? <MainModal  closeModal={()=>this.setState({modalVisible:false})} />:null}
        </div>
       

      </section>
    )
  }
}

export default TrainerSection