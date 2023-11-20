// pages/faq.tsx
import React from 'react';

const Faq: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#ECF4FC',
    color: '#164454',
    padding: '20px',
  };

  const faqItemStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const headingStyle: React.CSSProperties = {
    color: '#4CA4B4',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textStyle: React.CSSProperties = {
    color: '#2A4D4E',
  };

  const listStyle: React.CSSProperties = {
    color: '#2A4D4E',
    paddingLeft: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1 className="text-3xl font-bold mb-4" style={headingStyle}>
        FAQ
      </h1>
      <p className="mb-8" style={textStyle}>
        Important FAQ for customer service. Help agencies to define their new business objectives and then create professional service.
      </p>

      <div style={faqItemStyle}>
        <h2 style={headingStyle} className="text-xl font-bold mb-4">
          1. Medical payments made easy.
        </h2>
        <p style={textStyle}>
          Banque Du PTG is invested in your health, financially and physically. With our HSA Debit MasterCard®, settling your medical expenses is easier than ever - with no checks involved! Stop by one of our offices and speak with a representative to get started.
        </p>
      </div>

      <div style={faqItemStyle}>
        <h2 style={headingStyle} className="text-xl font-bold mb-4">
          2. EMV Technology
        </h2>
        <p style={textStyle}>
          Banque Du PTG EMV compliant cards use a built-in microprocessor (the metallic square on the front of your card) that provides greater protection against counterfeit fraud. Using a combination of dynamic data unlike the magnetic stripe technologys static data and an online/offline PIN, EMV compliant cards provide you with the added security you deserve.
        </p>
      </div>

      {/* Add more FAQs as needed */}

      <div style={faqItemStyle}>
        <h2 style={headingStyle} className="text-xl font-bold mb-4">
          6. Building Relationships with Face-to-Face Banking
        </h2>
        <p style={textStyle}>
          As your neighbor and local bank, Banque Du PTG is dedicated to understanding your needs. With our customers in mind, Community Bank has partnered with Banc Card, the leading merchant services provider in the industry, to bring you a better, more personal banking experience. With more than 20 years of delivering cutting-edge, secure and reliable systems to customers, Banc Card is the perfect partner to help us meet your needs.
        </p>
      </div>

      <div style={faqItemStyle}>
        <h2 style={headingStyle} className="text-xl font-bold mb-4">
          7. Value-Added Solutions
        </h2>
        <ul style={listStyle}>
          <li>Electronic check verification, conversion, guarantee, and ACH check services</li>
          <li>Electronic gift, promotional and loyalty cards</li>
          <li>Point-of-Sale Solutions</li>
          <li>Payment terminals, software, and internet products, and value-added resellers</li>
          <li>Interface solutions</li>
          <li>Convenience pay services</li>
          <li>Online reporting and support tools</li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;
