import React, { useState } from 'react';

function Question() {
  // State to keep track of which question is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function for expanding/collapsing questions
  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Array of FAQ objects with unique questions and answers
  const faqs = [
    { question: "How can I order a ride twice?", answer: "To order a ride twice, go to your past rides and select 'Reorder'. This will allow you to book a similar ride with the same settings." },
    { question: "How do I cancel a booking?", answer: "You can cancel a booking from the 'My Trips' section. Click on the ride you wish to cancel, then select 'Cancel Booking'." },
    { question: "What payment methods are supported?", answer: "We support major credit cards, debit cards, and mobile payment options. You can set your preferred payment method in the 'Payment Settings'." },
    { question: "Is there a refund policy?", answer: "Yes, refunds are available for cancellations made at least 24 hours before the ride. Please check our refund policy for detailed information." },
    { question: "Can I change my pickup location after booking?", answer: "Yes, you can change the pickup location until 30 minutes before the ride. Go to 'My Trips' and edit the pickup details." },
    { question: "How can I contact the driver?", answer: "Once your booking is confirmed, you’ll see an option to contact your driver in the 'My Trips' section." },
    { question: "What safety measures are in place?", answer: "All drivers are verified, and we have 24/7 support. Safety feedback from users is closely monitored to ensure a secure experience." },
    { question: "How do I leave a review?", answer: "After your trip, go to 'My Trips' and select the completed ride. There, you’ll find an option to leave a review for your driver." }
  ];

  return (
    <div className="w-full px-5 mt-10 lg:px-20 py-14 bg-[#36A690] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold lg:text-3xl text-2xl text-center">Frequently Asked Questions</h2>
        <div className="cards lg:pt-10 pt-5 grid lg:grid-cols-2 gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card w-full rounded-lg py-2 px-3 border-2 border-white ${
                expandedIndex === index ? "bg-[#2e8a76]" : ""
              }`}
            >
              <div className="flex items-center justify-between" onClick={() => handleToggle(index)}>
                <h4 className="font-semibold">{faq.question}</h4>
                <span>
                  <i className={`fa-solid ${expandedIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </div>
              {expandedIndex === index && (
                <p className="text-sm mt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
