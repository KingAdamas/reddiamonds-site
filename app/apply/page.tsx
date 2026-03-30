import React from 'react';
import { Button } from 'your-button-component';
import './ApplyPage.css';

const ApplyPage = () => {
    return (
        <div className="apply-page">
            <h1>Apply to Join</h1>
            <p>Your application has been received and entered into the RDI review process. Our team will review fit, potential, and overall alignment with the pipeline.</p>
            <Button text="Back to Home" onClick={() => {}} />
        </div>
    );
};

export default ApplyPage;