import App from '../App';

import React, { useState } from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
// Import other steps as needed

const NewRecipe = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        recipeName: '',
        description: '',
        author: '',
        cuisine: '',
        category: '',
        prepTime: '',
        cookTime: '',
        totalTime: '',
        servings: '',
        difficulty: '',
        nutritionalInfo: '',
        tags: '',
        imageURL: '',
        videoURL: '',
        notes: '',
        ingredients: [],
        instructions: []
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handleSubmit = () => {
        // Submit form data to the server or database
        console.log(formData);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
            case 2:
                return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
            case 3:
                return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
            // Add more cases for additional steps
            default:
                return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
        }
    };

    return (
        <div>
            {renderStep()}
            {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
        </div>
    );
};

export default NewRecipe;