import React, { Component } from 'react'
import ChangeLang from './ChangeLang';

export class Nav extends Component {
    state={
        navs:[
            {
                title:"Aksiyalar",
                web: 740,
                mob: 600
            },
            {
                title:"Biz kimik",
                web: 1640,
                mob: 2500
            },
            {
                title:"Üstünlüklərimiz",
                web: 2400,
                mob: 4350
            },
            {
                title:"Faydalar",
                web: 3300,
                mob: 6400
            },
            {
                title:"Təlimlər",
                web: 3900,
                mob: 7240
            },
            {
                title:"Məşqçilər",
                web: 4560,
                mob:8800
            },
            {
                title:"Əlaqə",
                web: 6060,
                mob:14500
            }
        ],
        activeNav:0
    }
    scrollToSection(index){
        const x = document.querySelector('#respNav');
        const sec= document.querySelectorAll("section");
        if(x){x.checked=false}
        if(index+1 < 7){
            var bodyRect = document.body.getBoundingClientRect(),
            elemRect = sec[index+1]?.getBoundingClientRect(),
            offset   = elemRect.top - bodyRect.top;
            let y = (index === 2 || index === 4)?50:100
            window.scrollTo(0, offset - y)
        }else{
            window.scrollTo(0, 10500)
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        window.addEventListener("scroll", ()=>{
            let arr = []
            const sec= document.querySelectorAll("section");
            for(let i = 0; i < sec.length; i++){
                var bodyRect = document.body.getBoundingClientRect(),
                elemRect = sec[i]?.getBoundingClientRect(),
                offset   = elemRect.top - bodyRect.top;
                let y = (i === 2 || i === 4)?50:100
                if( window.scrollY >= (offset-120)){
                    arr.push(i-1)
                }

            }
            this.setState({activeNav: Math.max(...arr)})
        })
    }
  render() {
    const {navs, activeNav} = this.state;
    return (
    <>
    <input type='checkbox' className='hidden' id='respNav' /> 
      <nav className='ml-[58px] flex items-center'>
        <ul className='flex '>
            {
                navs.map((data, i)=>{
                    return(
                        <li onClick={this.scrollToSection.bind(this, i)} className={`pt-[12px] cursor-pointer  hover:text-[var(--primary2)] pb-[12px] hover:font-bold text-[16px] mb-[-20px] pl-[16px] pr-[16px] border-b-[var(--gray-2)] border-b-[4px] hover:border-b-[var(--primary)] ${activeNav === i? 'text-[var(--primary2)] font-bold border-b-[var(--primary)]':''}`} key={i}>
                            <a >{data?.title}</a>
                        </li>
                    )
                })
            }
        </ul>
        <ChangeLang />
      </nav>
      </>
    )
  }
}

export default Nav