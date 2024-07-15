import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
        <div>
            <h2>Step 3: Timing Information</h2>
            <label>Prep Time:</label>
            <input type="text" onChange={handleChange('prepTime')} value={formData.prepTime} />
            <label>Cook Time:</label>
            <input type="text" onChange={handleChange('cookTime')} value={formData.cookTime} />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step3;