import React, { Component } from 'react'

export class Card2 extends Component {
  render() {
    const {titleSvg, title, text=[], img="", btn, right=false, openModal=()=>{}} = this.props;
    return (
        <div>
            <div className='pl-[16px] pr-[16px]'>
                <div className='flex gap-[16px] items-center max-[700px]:justify-center'>
                    {titleSvg}
                    <h3 className='text-[var(--primary2)] text-[16px] font-bold'>{title}</h3>
                </div>
                <div>
                    <ul className='mt-[24px] flex flex-col gap-[20px] max-[700px]:text-center'>
                        {
                            text.map((data, i)=>{
                                return(
                                    <li key={i}>
                                        <span className='text-[16px] font-regular text-[var(--black2)]'>{data}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {
                img !== ""?
                <img alt="Image" className={`mt-[11px] ml-auto ${right? "mr-[70px]":'w-full'}`} src={img} />:null
            }
            {
                btn?
               <button onClick={()=>openModal()} className='font-medium text-[16px] w-full mt-[16px] h-[56px] rounded-[8px] border border-[var(--primary)]'>
                    Qədir Hüseynov haqqında
                </button> :null
            }
            
        </div>
    )
  }
}

export default Card2