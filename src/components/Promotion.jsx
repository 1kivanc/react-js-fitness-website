import React from 'react'
import Arnold from '.././assets/arnold.jpg'
import SporSalonu from '.././assets/sporsalonu.jpg'

const Promotion = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img  classNmae ='w-[500px] mx-auto my-4' src={Arnold}alt="/" />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Spor hayatının ayrılmaz parçası olanlar için</h1>
            <p>Alanında uzman eğitmenler, ileri teknoloji ekipmanlar ve grup dersleri ile sınırlarını sonuna kadar zorla.</p>
            <button className='bg-black text-[#DF1D2F] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>En yakın kulubü bul</button>
          </div>
      </div>
      <div className='max-w-[1240px] mx-auto mt-10 grid md:grid-cols-2'>
            <img  classNmae ='w-[200px] mx-auto my-4' src={SporSalonu}alt="/" />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Ayrıcalıklı bir spor deneyimi için</h1>
            <p>Hayatın akışına devam ederken ruh ve beden sağlığını da ihmal etmiyorsan sen de yerini al.</p>
            <button className='bg-black text-[#DF1D2F] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>En yakın kulubü bul</button>
          </div>
          
      </div>
    </div>
  )
}

export default Promotion