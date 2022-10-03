import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full bg-[#90e0ef] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <h2 className='text-2xl font-bold text-center py-2 '>VIP+ Üyelik</h2>
                <h4 className='font-bold text-center py-2'>Bedelsiz kayıt</h4>
                <p className='text-center text-4xl font-bold'>800 TL</p>
                <div className=' font-medium'>
                    <p className='py-1 border-b mx-8'>30 Gün İlave Ücretsiz Dondurma</p>
                    <p className='py-1 border-b mx-8'>Grup Derslerine Erken Rezervasyon - 4 Gün</p>
                    <p className='py-1 border-b mx-8'>Kişiye Özel Ölçüm ve Program</p>
                    <p className='py-1 border-b mx-8'>Tüm MACFit Kulüplerini Sınırsız Kullanabilme</p>
                    <p className='py-1 border-b mx-8'>Ayda 2 kez Misafir Getirebilme</p>
                    <p className='py-1 border-b mx-8'>100 MAC+ Alışveriş Kredisi</p>
                    <p className='py-1 border-b mx-8'>Ayda 1 Kez MAC Kulüplerini Kullanabilme</p>
                    <p className='py-1 border-b mx-8'>Özel Derslerde %25 İndirim</p>
                    <p className='py-1 border-b mx-8'>NUSPA da %40 İndirim</p>

                </div>
                <button className='bg-black w-[200px]  text-[#DF1D2F] rounded-md font-medium my-6 mx-auto py-3' >Üyeliği Başlat</button>
            </div>
            <div className='w-full bg-[#ffca3a] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
            <h2 className='text-2xl font-bold text-center py-2 '>Gold üyelik</h2>
                <h2 className='text-2xl font-bold text-center py-8 '>12 Aylık Kayıt</h2>
                <p className='text-center text-4xl font-bold'>500 TL</p>
                <div className=' font-medium'>
                    <p className='py-1 border-b mx-8'>30 Gün İlave Ücretsiz Dondurma</p>
                    <p className='py-1 border-b mx-8'>Grup Derslerine Erken Rezervasyon - 4 Gün</p>
                    <p className='py-1 border-b mx-8'>Kişiye Özel Ölçüm ve Program</p>
                    <p className='py-1 border-b mx-8'>Kulüplerimizi sınırsız kullanma</p>
                    <p className='py-1 border-b mx-8'>Ayda 2 kez Misafir Getirebilme</p>
                    <p className='py-1 border-b mx-8'>100 Kredilik Alışveriş Kredisi</p>
                    <p className='py-1 border-b mx-8'>Özel Derslerde %25 İndirim</p>
                    <p className='py-1 border-b mx-8'>NUSPA da %40 İndirim</p>

                </div>
                <button className='bg-black w-[200px]  text-[#DF1D2F] rounded-md font-medium my-6 mx-auto py-3' >Üyeliği Başlat</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <h2 className='text-2xl font-bold text-center py-8 '>12 Aylık kayıt</h2>
                <p className='text-center text-4xl font-bold'>350 TL</p>
                <div className=' font-medium'>
                    <p className='py-1 border-b mx-8'>Üyelik Dönemine Göre Dondurma</p>
                    <p className='py-1 border-b mx-8'>Grup Derslerine Erken Rezervasyon - 2 Gün</p>
                    <p className='py-1 border-b mx-8'>2 Kişi ile Ölçüm ve Program</p>
                    <p className='py-1 border-b mx-8'>Üye Olunan Kulübü Sınırsız kullanım</p>
                 

                </div>
                <button className='bg-black text-[#DF1D2F] w-[200px] rounded-md font-medium my-6 mx-auto py-3' >Üyeliği Başlat</button>
            </div>

        </div>

    </div>
  )
}

export default Pricing