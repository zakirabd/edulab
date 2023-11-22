import React, { Component } from 'react'
import SectionHeader from '../SectionHeader'
import Card1 from '../cards/Card1'
import img from "../../images/card2.png"

export class TrainingSection extends Component {
  render() {
    return (
        <section className='bg-[var(--gray)] pt-[1px] pb-[40px]'>
            <SectionHeader bgGray={true} title="TƏLİMLƏR" />
            <div className='container'>
                <p className='p-[16px] text-[16px] font-regular text-[var(--black2)]'>“GADIR GUSEINOV Chess School”da siz istənilən növ – qrup, fərdi və ya onlayn formada təlimləri seçə bilərsiniz. Təlimlərin müddəti 90 dəqiqədir. Hər bir günlük təlimin əvvəlində məşqçi ev tapşırığını yoxlayır, sonra yeni nəzəri materialı tələbələrlə təhlil edir və təlimin sonuna doğru məşq üçün zaman ayıraraq oyun keçirir. Günlük təlimlər məşqçinin hər bir tələbəyə istinad materialı və ev tapşırığı verməklə yekunlaşır.</p>
                <div className='grid grid-cols-3 gap-[32px] mt-[40px]  max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1'>
                    <Card1 img={img} imgH="128px" title="Rəngarənglik" desc="Monotonluq həmişə darıxdırıcı və yorucudur. Ona görə də biz təəccübləndiririk:Biz tələbələrimizə hər təlimdə şahmatın yeni tərəflərini göstəririk, müxtəlif formatlarda təlimlər keçiririk, nəzəriyyə və təcrübə bir birini əvəzləyir." /> 
                    <Card1 img={img} imgH="128px" title="Rəngarənglik" desc="Monotonluq həmişə darıxdırıcı və yorucudur. Ona görə də biz təəccübləndiririk:Biz tələbələrimizə hər təlimdə şahmatın yeni tərəflərini göstəririk, müxtəlif formatlarda təlimlər keçiririk, nəzəriyyə və təcrübə bir birini əvəzləyir." /> 
                    <Card1 img={img} imgH="128px" title="Rəngarənglik" desc="Monotonluq həmişə darıxdırıcı və yorucudur. Ona görə də biz təəccübləndiririk:Biz tələbələrimizə hər təlimdə şahmatın yeni tərəflərini göstəririk, müxtəlif formatlarda təlimlər keçiririk, nəzəriyyə və təcrübə bir birini əvəzləyir." /> 
                </div>
            </div>
           
        </section>
    )
  }
}

export default TrainingSection