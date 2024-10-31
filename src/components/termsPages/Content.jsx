import React, { useState } from 'react';

function Content() {
  const [activeTab, setActiveTab] = useState('cookiePolicy'); // State to track the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <div className="w-full px-5 lg:px-20 py-5">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-center gap-8 font-semibold pt-5">
          <div className="flex space-x-6 border-b-2 border-gray-200">
            <a
              onClick={() => handleTabClick('cookiePolicy')}
              className={`relative cursor-pointer pb-2 transition-colors duration-300 ${
                activeTab === 'cookiePolicy' ? 'text-[#349D89] border-b-2 border-[#349D89]' : 'text-gray-600'
              } hover:text-[#349D89]`}
            >
              Cookie Policy
            </a>
            <a
              onClick={() => handleTabClick('terms')}
              className={`relative cursor-pointer pb-2 transition-colors duration-300 ${
                activeTab === 'terms' ? 'text-[#349D89] border-b-2 border-[#349D89]' : 'text-gray-600'
              } hover:text-[#349D89]`}
            >
              Terms & Conditions
            </a>
            <a
              onClick={() => handleTabClick('privacy')}
              className={`relative cursor-pointer pb-2 transition-colors duration-300 ${
                activeTab === 'privacy' ? 'text-[#349D89] border-b-2 border-[#349D89]' : 'text-gray-600'
              } hover:text-[#349D89]`}
            >
              Privacy Policy
            </a>
          </div>
        </header>

        <section className="text-gray-700 grid lg:pt-10 pt-5 pb-5">
          {activeTab === 'cookiePolicy' && (
            <>
              <h3 className="font-bold text-xl">Cookie Policy</h3>
              <p className="mt-2">
                As a company specializing in the trading of gift cards and digital tokens, we value your privacy and want to ensure that your browsing experience on our website{' '}
                <a href="https://stockhuttrade.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline underline-offset-4">
                  stockhuttrade.com
                </a>{' '}
                is smooth, secure, and personalized. This Cookie Policy explains how we use cookies and similar technologies to achieve this.
              </p>
              <h4 className="font-bold text-lg mt-4">What are cookies?</h4>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They help us enhance your interaction with our Site by remembering your preferences and actions.
              </p>
              <h4 className="font-bold text-lg mt-4">How we use cookies</h4>
              <p>At StockHut, we use cookies for the following purposes:</p>
              <h5 className="font-semibold mt-2">Essential Cookies:</h5>
              <p>These cookies are vital for the proper functioning of our Site. They enable you to access secure areas, make transactions, and navigate the website efficiently.</p>
              <h5 className="font-semibold mt-2">Analytics Cookies:</h5>
              <p>We utilize analytics tools to understand how visitors use our Site. This information helps us improve our services and create a better user experience.</p>
              <h5 className="font-semibold mt-2">Functionality Cookies:</h5>
              <p>These cookies remember your preferences, such as language settings, and customize your experience accordingly.</p>
              <h5 className="font-semibold mt-2">Marketing and Advertising Cookies:</h5>
              <p>We may use these cookies to deliver relevant content and ads to you. They help us tailor our marketing efforts to your interests.</p>
              <h4 className="font-bold text-lg mt-4">Your cookie choices</h4>
              <p>You have the power to manage your cookie preferences. Most web browsers allow you to control cookies through their settings. However, please note that disabling certain cookies may impact your ability to fully utilize all features of our Site.</p>
              <h4 className="font-bold text-lg mt-4">Updates to the Cookie Policy</h4>
              <p>We may update this Cookie Policy occasionally to align with changes in technology and legal requirements.</p>
              <h4 className="font-bold text-lg mt-4">Get in touch</h4>
              <p>
                For any queries about our Cookie Policy or our use of cookies, feel free to contact us at{' '}
                <a href="mailto:stockhut@stockhuttrade.com" className="text-blue-700">
                  stockhut@stockhuttrade.com
                </a>.
              </p>
              <p className="mt-2">
                By using our Site, you agree to the use of cookies as outlined in this Cookie Policy.
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h3 className="font-bold text-xl">Terms & Conditions</h3>
              <p className="mt-2">
                These are the terms and conditions that govern your use of our services. By using our site, you agree to comply with and be bound by these terms.
              </p>
              {/* Add more content for Terms & Conditions */}
            </>
          )}

          {activeTab === 'privacy' && (
            <>
              <h3 className="font-bold text-xl">Privacy Policy</h3>
              <p className="mt-2">
                Your privacy is important to us. This policy outlines how we handle your personal information.
              </p>
              {/* Add more content for Privacy Policy */}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default Content;
