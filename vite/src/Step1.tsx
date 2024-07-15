import React from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Step 1: Basic Information</h2>
            <label className="w-full mb-2 text-gray-600 font-semibold">Recipe Name:</label>
            <input 
                type="text" 
                onChange={handleChange('recipeName')} 
                value={formData.recipeName} 
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="w-full mb-2 text-gray-600 font-semibold">Description:</label>
            <textarea 
                onChange={handleChange('description')} 
                value={formData.description} 
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
                onClick={nextStep} 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
                Next
            </button>
        </div>
    );
};

export default Step1;