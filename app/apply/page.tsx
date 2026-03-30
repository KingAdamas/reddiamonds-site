import React from 'react';

const ApplyPage = () => {
  return (
    <main>
      <h1>Apply to RDI</h1>
      <p>Ready to take the next step with us. You got this!</p>
      <div>
        <h2>Section 01</h2>
        <div className='layout-row'>
          <div>LEGAL NAME + PLATFORM HANDLE (@...)</div>
          <div>PRIMARY PLATFORM + REGION / COUNTRY</div>
          <div style={{ textAlign: 'center', width: '100%' }}>GENDER</div>
        </div>
      </div>
      <div>
        <h2>Section 03</h2>
        <select placeholder='ACTIVE & CONSISTENT?'>...</select>
        <select placeholder='OPEN TO COACHING?'>...</select>
        <select placeholder='WEEKLY COMMITMENT?'>...</select>
        <select placeholder='FOCUSED ON LONG TERM GROWTH?'>...</select>
        <textarea placeholder='WHY SHOULD YOU BE SELECTED FOR THE RDI PIPELINE?'></textarea>
      </div>
      <div>
        <p>Your application has been submitted with confidence.</p>
      </div>
    </main>
  );
};

export default ApplyPage;