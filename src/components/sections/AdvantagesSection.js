import React, { Component } from 'react'
import SectionHeader from '../SectionHeader'
import Card3 from '../cards/Card3'

export class AdvantagesSection extends Component {
  render() {
    return (
      <section className='bg-[var(--gray)] pt-[1px] pb-[40px]'>
        <SectionHeader bgGray={true} title="ÜSTÜNLÜKLƏRİMİZ" />
        <div className='grid grid-cols-3 container gap-[32px]  max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1'>
            <Card3 title={"Fərdi yanaşma"} text="Yaşa və oyun səviyyəsinə görə formalaşan kiçik qruplarda (4-12 nəfər) təlim. Bu, məşqçiyə hər bir tələbəyə daha çox vaxt ayırmağa imkan verir." />
            <Card3 title={"Peşəkar məşqçilər"} text="Peşəkarlara etibar edin! Bütün məşqçilər ciddi seçimdən keçir və eyni tədris metodologiyasına uyğun olaraq təlimatlandırılır və yalnız bundan sonra onlara tədrisə başlamağa icazə verilir." />
            <Card3 title={"Tədris forması"} text="Sizə uyğun tədris formasını seçin: “GADIR GUSEINOV Chess School”un tədris binasında və ya onlayn. Tədrisin formasından asılı olmayaraq təlimlər fərdi və qrup şəklində aparılır." />
        </div>
        <div className='container mt-[32px]'>
            <Card3 title={"Düşünməyin öyrədilməsi"} text="Hər kəs geclü şahmatçı olmaq məcburiyyətində deyil və hər kəsin buna ehtiyacı yoxdur. Ancaq hamının məntiqli düşünməyə ehtiyacı var.Buna görə də tədrisimizin əsas məqsədi tələbələrimizin intellektual qabiliyyətlərinin inkişaf etdirilməsidir. Məqsədimiz gedişlərin adlarını və ardıcıllığını əzbərlətmək deyil." />
        </div>
        <div className='grid grid-cols-3 container gap-[32px] mt-[32px]  max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1'>
            <Card3 title={"Rahat məşq cədvəli"} text="Özünüz üçün cədvəl hazırlayın! “GADIR GUSEINOV Chess School” həftənin 7 günü fəaliyyət göstərir ki, bu da tələbələrə şahmatı öyrənməyi digər fəaliyyətlərlə birləşdirməyə imkan verir." />
            <Card3 title={"Uyğun qiymət"} text="Biz təcrübəli məşqçiləri olan gənc tədris mərkəziyik, ona görə də təlimlərimiz orta hesabla digər məktəblərdən daha ucuzdur." />
            <Card3 title={"Rahat komunikasiya"} text="Məşqçilər hər zaman sizə şəxsən və ya qrup yazışmalarında (çatlarında) müraciətiniz ilə bağlı rəy bildirməyə hazırdır. İnzibati məsələlərlə bağlı hər zaman mərkəzlə telefonla və ya sosial şəbəkələr üzərindən əlaqə saxlaya bilərsiniz." />
        </div>
      </section>
    )
  }
}

export default AdvantagesSection