import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
        <div>
            <h2>Step 2: Additional Information</h2>
            <label>Author:</label>
            <input type="text" onChange={handleChange('author')} value={formData.author} />
            <label>Cuisine:</label>
            <input type="text" onChange={handleChange('cuisine')} value={formData.cuisine} />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;