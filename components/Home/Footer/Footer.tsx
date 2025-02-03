import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
             <div>
{/* LOGO */}
            <div className="flex items-center space-x-2">
                <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
                    <FaHouse />

                </div>
                <h1 className="text-red-700 font-bold text-sm sm:text-base md:text-x1">
                    House Rent-BD
                </h1>

            </div>
            <p className="text-gray-300 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti architecto expedita? Itaque sit.
             </p>
             <p className="text-gray-300 mt-4 font-semibold"> example@gmail.com</p>
             <p className="text-gray-300 mt-4 font-semibold"> +880 1719 133 177 </p>
             <div className="flex items-center space-x-4 mt-6">
                <FaFacebookF className="w-6 h-6 text-blue-600"/>
                <FaTwitter className="w-6 h-6 text-sky-500"/>
                <FaYoutube className="w-6 h-6 text-red-700"/>
                <FaInstagram className="w-6 h-6 text-pink-600"/>
                
             </div>
             </div>
             {/* {2nd Part} */}
               <div className="md:mx-auto">
                <h1 className="footer__heading">Popular Search</h1>
                <p className="footer__link">Appartment For Rent</p>
                <p className="footer__link">Appartment Low to High</p>
                <p className="footer__link">Offices For Buy</p>
                <p className="footer__link">Offices For Rent</p>
               </div>
               {/* {3rd part} */}
               <div className="lg:mx-auto">
                <h1 className="footer__heading">Quick Link</h1>
                <p className="footer__link">Terms of use</p>
                <p className="footer__link">Privacy Policy</p>
                <p className="footer__link">Pricing Plans</p>
                <p className="footer__link">Our Services</p>
                <p className="footer__link">Contact Support</p>
                <p className="footer__link">Carrers</p>
                <p className="footer__link">FAQs</p>
               </div>
               <div className="md:mx-auto">
                <h1 className="footer__heading">Discover</h1>
                <p className="footer__link">Ghulshan</p>
                <p className="footer__link">Banani</p>
                <p className="footer__link">Nikunjo-1</p>
                <p className="footer__link">Mirpur-14</p>
                <p className="footer__link">Khilkhet</p>
                <p className="footer__link">Basundhara</p>
                <p className="footer__link">Polton</p>
               </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">@Copyright 2025 by Wedev </p>
    </div>
  )
}

export default Footer