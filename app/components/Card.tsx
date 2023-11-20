// components/Card.tsx

import React from 'react';

const Card: React.FC = () => {
  const cardContent = [
    {
      title: 'Access Mobile Banking',
      description:
        'Our site is now mobile-friendly. To access mobile banking, please log in on our homepage with your Online Banking User ID and password after you have completed the enrollment process.',
    },
    {
      title: 'Snap & Send Check Deposit',
      description:
        'Banque Du PTG trust Snap & Send feature for smartphones is here. Now you can deposit checks whenever and wherever it’s convenient for you – 24/7/365. Start using Snap & Send by downloading our free PTGmobile app for smartphones and tablets from your app store.',
    },
    {
      title: 'Business Customer',
      description:
        'PTG\'s Mobile Banking allows you to keep up with your finances while you’re on the go. You can do your normal Online Banking business, plus you can use the Mobile Authorizations feature to approve transactions initiated at the office.',
    },
    // Add more card content as needed
  ];

  const cardStyle: React.CSSProperties = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease-in-out',
    margin: '10px',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#3C8474',
    color: '#fff',
    cursor: 'pointer',
  };

  const titleStyle: React.CSSProperties = {
    color: '#3C8474',
  };

  const descriptionStyle: React.CSSProperties = {
    color: '#000',
  };

  return (
    <div style={{ ...cardStyle, ...hoverStyle }} onClick={() => console.log('Card clicked')}>
      {cardContent.map((content, index) => (
        <div key={index}>
          <h3 style={titleStyle}>{content.title}</h3>
          <p style={descriptionStyle}>{content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
