import React from 'react'
import img14 from '../../../public/images/img14.png'
import icon2 from '../../../public/images/icon2.png'
import icon5 from '../../../public/images/icon5.png'
import icon6 from '../../../public/images/icon6.png'
import icon7 from '../../../public/images/icon7.png'

function Benefit() {
  return (
    <div className="w-full py-10 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 rounded-lg w-full lg:min-h-[500px]">

        {/* Left Section with Image */}
        <div className="leftCC w-full h-full">
          <img src={img14} alt="driver interacting with traveller" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Section with Benefits */}
        <div className="rightCC flex items-center justify-center">
          <div className="text-content px-8">
            <h2 className="font-bold lg:text-3xl text-2xl text-center lg:text-left">Why Choose CoRyde</h2>
            <div className="cards grid gap-5 lg:pt-10 pt-5">
              
              <div className="card flex items-center gap-5">
                <div className="right">
                  <img src={icon5} alt="Set Your Own Price" />
                </div>
                <div className="left">
                  <h4 className="font-bold text-[#36A690] text-lg">Set Your Own Price</h4>
                  <p className="text-gray-700 lg:text-sm text-base">You have full control over your trip pricing.</p>
                </div>
              </div>
              
              <div className="card flex items-center gap-5">
                <div className="right">
                  <img src={icon2} alt="Flexible Hours" />
                </div>
                <div className="left">
                  <h4 className="font-bold text-[#36A690] text-lg">Flexible Hours</h4>
                  <p className="text-gray-700 lg:text-sm text-base">Drive on your own schedule—no commitment.</p>
                </div>
              </div>
              
              <div className="card flex items-center gap-5">
                <div className="right">
                  <img src={icon6} alt="Low Service Fees" />
                </div>
                <div className="left">
                  <h4 className="font-bold text-[#36A690] text-lg">Low Service Fees</h4>
                  <p className="text-gray-700 lg:text-sm text-base">We ensure you keep most of what you earn.</p>
                </div>
              </div>
              
              <div className="card flex items-center gap-5">
                <div className="right">
                  <img src={icon7} alt="In-App Support" />
                </div>
                <div className="left">
                  <h4 className="font-bold text-[#36A690] text-lg">In-App Support</h4>
                  <p className="text-gray-700 lg:text-sm text-base">Get help when you need it through our live chat.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit
