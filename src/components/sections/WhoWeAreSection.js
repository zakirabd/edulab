import React, { Component } from 'react'
import TargetSvg from '../../svg/TargetSvg'
import img1 from "../../images/img2.png"
import img2 from "../../images/gadirHuseynov.png"
import Card2 from '../cards/Card2'
import PositionSvg from '../../svg/PositionSvg'
import MainSvg from '../../svg/MainSvg'
import InfoModal from '../modal/InfoModal'
import SectionHeader from '../SectionHeader'
export class WhoWeAreSection extends Component {
    state={
        cards:[
            {
                titleSvg: <TargetSvg />,
                title:'Hədəfimiz',
                text:["· Azərbaycanımızı dünyaya daha yaxşı tanıtmaq;", "· Dünya səviyyəsində uğur qazanan şahmatçılar yetişdirmək", "· Tələbələrin fərdi keyfiyyətlərinin üzə çıxarılması və inkişafına töhfə vermək."],
                img:img1,
                btn:false,
                right:true
            },
            {
                titleSvg: <PositionSvg />,
                title:'Vəzifələrimiz',
                text:[
                    "1. Uşaq, yeniyetmə və gənclərin şahmata olan maraqlarını inkişaf etdirmək;",
                    "2. Şahmatçıların beynəlxalq yarışlarda uğurlar əldə etməsinə köməklik göstərmək;",
                    "3. Uşaq, yeniyetmə və gənclərin şahmatla müntəzəm və fəal məşğul olmaları üçün tədbirlər görmək;",
                    "4. Müəyyən olunmuş normalara uyğun olan şahmatçıları aşkara çıxarmaq;",
                    "5. Şahmatçıları iri miqyaslı yarışlarda, dünya və qitə çempionatlarında, beynəlxalq turnirlərdə təmsil olunmaları üçün resusla təmin etmək;",
                    "6. Şahmatçıları idman usatlığına namizəd və idman ustası normativlərini yerinə yetrilməsi üçün şərait yaratmaq."
                ],
                img: '',
                btn:false,
                right:false

            },
            {
                titleSvg: <MainSvg />,
                title:'Qədir Hüseynov',
                text:[
                    "Şahmatda kreativ həll yolları və qeyri-adi strategiyalar dedikdə ağıllara ilk Qədir Hüseynov gəlir. Qədir ölkənin ən güclü oyunçularından biridir.",
                    "Qədir Hüseynov bir çox beynəlxalq turnirlərdə əla nəticələr əldə edərək ölkəmiz üçün bir çox önəmli qələbələrə imza atıb. O, 1994-cü ildə 8 yaşında Avropa çempionatında birinci tutmuş və ən gənc FİDE ustası kimi Ginnesin Rekordlar Kitabına düşmüşdür."
                ],
                img:img2,
                btn:true,
                right:false
            }
        ],
        modalVisible:false
    }
  render() {
    const {cards, modalVisible} = this.state
    return (
      <section  >
        <SectionHeader title="BİZ KİMİK" />
        <div className='container pb-[50px]'>
            <div className='grid grid-cols-3 gap-[32px]  max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1'>
            {
                cards.map((data, i)=>{
                    return(
                        <Card2 key={i} 
                            titleSvg={data?.titleSvg} 
                            title={data?.title} 
                            text={data?.text} 
                            img={data?.img} 
                            btn={data?.btn} 
                            right={data?.right}
                            openModal={()=>this.setState({modalVisible:true})}
                        />
                    )
                })
            }
            </div>
            {modalVisible? <InfoModal  closeModal={()=>this.setState({modalVisible:false})} />:null}
        </div>
     
      </section>
    )
  }
}

export default WhoWeAreSection