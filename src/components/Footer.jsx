import React from 'react'

import {
    FaInstagram,
    FaTwitterSquare,
    FaYoutube,
    FaFacebook
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className=' max-w-[1240px]  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-3'>
        <div className='lg:col-span-2 flex justify-between text-white'>
            <div>
                <h4 className='font-medium text-gray-400'>Keşfet</h4>
                <ul>
                    <li className='py-2 text-sm'>Kulüp ve stüdyolar</li>
                    <li className='py-2 text-sm'>Topluluk</li>
                    <li className='py-2 text-sm'>Spa</li>
                    <li className='py-2 text-sm'>Kampanyalar</li>
                </ul>
            </div>
            <div>
                <h4 className='font-medium text-gray-400'>Hakkında</h4>
                <ul>
                    <li className='py-2 text-sm'>Biz Kimiz</li>
                    <li className='py-2 text-sm'>Kurumsal Satış</li>
                    <li className='py-2 text-sm'>İnsan Kaynakları</li>
    
                </ul>
            </div>
            <div>
                <h4 className='font-medium text-gray-400'>Hızlı Erişim</h4>
                <ul>
                    <li className='py-2 text-sm'>En yakın kulübü bul</li>
                    <li className='py-2 text-sm'>Sıkça sorulan sorular</li>
                    <li className='py-2 text-sm'>Üyelik hesabına giriş</li>
                    <li className='py-2 text-sm'>Bize ulaşın</li>
                </ul>
            </div>
            <div>
                <h4></h4>
            </div>

        </div>
        <div className='lg:col-span-1 flex flex-col  text-white'>

            <h1>Bizi Takip Edin</h1>
            <div className='flex felx-row text-lg mt-5' >
            <i  className='mr-5'><FaInstagram /></i>
            <i className='mr-5'><FaTwitterSquare /></i>
            <i className='mr-5'><FaYoutube /></i>
            <i className='mr-5'><FaFacebook /></i>

            </div>
            
        </div>
        <div className='lg:col-span-2 felx-col text-white mt-5'>
            <h1 className='mb-5'>MOBİL UYGULAMAMIZI İNDİRİN</h1>
            <img src="https://uyeol.macfit.com.tr/assets/images/google-play.png" alt="" />

        </div>
    </div>
    </div>
    
  )
}

export default Footer