import React from 'react'

function Content() {
  return (
    <div className='w-full'>
        <header className='flex items-center justify-center gap-3 font-semibold pt-5 text-gray-700'>
            <a href="#" className="relative hover:text-[#349D89] transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:w-full after:h-[2px] after:bg-[#349D89] after:transition-all after:duration-300">Terms & Condition</a>
            <a href="#" className="relative hover:text-[#349D89] transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#349D89] after:transition-all after:duration-300">Privacy Policy</a>
            <a href="#" className="relative hover:text-[#349D89] transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#349D89] after:transition-all after:duration-300">Terms Of Use</a>
        </header>

        <div className="text grid place-items-center lg:px-20 px-10 lg:pt-10 pt-5 pb-5">
        <h3>
            Welcome to StockHut! As a company specializing in the trading of gift cards and digital tokens, we value your privacy and want to ensure that your browsing experience on our website <a href="https://stockhuttrade.com" target="_blank" rel="noopener noreferrer" className='text-blue-700 underline underline-offset-4'>stockhuttrade.com</a> is smooth, secure, and personalized. This Cookie Policy explains how we use cookies and similar technologies to achieve this.
            <span className='font-bold text-lg block pt-2'>What are cookies?</span>
            Cookies are small text files that are placed on your device when you visit a website. They help us enhance your interaction with our Site by remembering your preferences and actions.
            <span className='font-bold text-lg block pt-2'>How we use cookies</span>
            At StockHut, we use cookies for the following purposes:
            <span className='font-semibold block py-1'>Essential Cookies:</span> These cookies are vital for the proper functioning of our Site. They enable you to access secure areas, make transactions, and navigate the website efficiently.
            <span className='font-semibold block py-1'> Analytics Cookies:</span> We utilize analytics tools to understand how visitors use our Site. This information helps us improve our services and create a better user experience.
            <span className='font-semibold block py-1'>Functionality Cookies:</span> These cookies remember your preferences, such as language settings, and customize your experience accordingly.
            <span className='font-semibold block py-1'>Marketing and Advertising Cookies:</span> We may use these cookies to deliver relevant content and ads to you. They help us tailor our marketing efforts to your interests.
            <span className='font-bold text-lg block pt-2'>Your cookie choices</span>
            You have the power to manage your cookie preferences. Most web browsers allow you to control cookies through their settings. However, please note that disabling certain cookies may impact your ability to fully utilize all features of our Site.
            <span className='font-bold text-lg block pt-2'>Updates to the Cookie Policy</span>
            We may update this Cookie Policy occasionally to align with changes in technology and legal requirements.
            <span className='font-bold text-lg block pt-2'>Get in touch</span>
            For any queries about our Cookie Policy or our use of cookies, feel free to contact us at <a href="mailto:stockhut@stockhuttrade.com" className='text-blue-700'>stockhut@stockhuttrade.com</a>.
            By using our Site, you agree to the use of cookies as outlined in this Cookie Policy.
        </h3>
        </div>
    </div>
  )
}

export default Content