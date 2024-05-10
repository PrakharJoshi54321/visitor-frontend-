import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <h1 style={{ fontSize: '2rem' }}>Meet Our Team</h1>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Vishnu Tripathi</li>
          <li>Aman Chamoli</li>
          <li>Abhishek Tiwari</li>
          <li>Khushi Kumari</li>
          <li>Prakhar Joshi</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
