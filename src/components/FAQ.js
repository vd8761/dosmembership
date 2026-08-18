"use client";
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need prior AI experience?",
      a: "Basic programming knowledge is recommended (Python is preferred), but you do not need prior experience with Machine Learning or AI. We cover Generative AI concepts from the ground up."
    },
    {
      q: "Will the sessions be recorded?",
      a: "Yes, all live sessions and workshops are recorded and will be available to you on the learning portal for up to 2 years after the Fellowship ends."
    },
    {
      q: "What is the refund policy?",
      a: "We maintain a strict no-refund policy. Once you enroll in the Fellowship, no refunds will be issued under any circumstances. Please review all program details carefully before joining."
    },
    {
      q: "How do GPU credits work?",
      a: "Premium members receive GPU credits, sufficient to train and deploy your GenAI projects without incurring personal cloud costs."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-color)' }}>
      <div className="container faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.q} <i className="fa-solid fa-plus"></i>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
