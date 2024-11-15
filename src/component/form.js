import React, { useState } from 'react';

function FullForm() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        date: '',
        gender: '',
        nationality: '',
        password: '',
        text: '',
        number: '',
        checkbox: false,
        radio: '',
        select: '',
        textarea: '',
        tea: false,
        coffee: false,
        status: '',
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Bio Form</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information Section */}
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
                        
                        {/* Name, Username, Email, Password Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {['name', 'username', 'email', 'password'].map((field) => (
                                <div key={field} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 capitalize">
                                        {field}:
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        type={field === 'password' ? 'password' : 'text'}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={`Enter your ${field}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Contact & Birth Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Demographics Section */}
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Demographics</h2>
                        
                        {/* Gender Selection */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Gender:</label>
                            <div className="flex space-x-4">
                                {['Male', 'Female'].map((gender) => (
                                    <label key={gender} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={gender}
                                            checked={formData.gender === gender}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span>{gender}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Nationality & State */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Nationality:</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">State:</label>
                                <select 
                                    name="select" 
                                    value={formData.select} 
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                >
                                    <option value="">Select State</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ogun">Ogun</option>
                                    <option value="kano">Kano</option>
                                </select>
                            </div>
                        </div>

                        {/* Drinks Preferences */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Preferred Drinks:</label>
                            <div className="flex space-x-4">
                                {['tea', 'coffee'].map((drink) => (
                                    <label key={drink} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name={drink}
                                            checked={formData[drink]}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="capitalize">{drink}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Additional Comments:</label>
                        <textarea
                            name="textarea"
                            value={formData.textarea}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32"
                            placeholder="Enter your comments here..."
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                        Submit Form
                    </button>
                </form>

                {/* Submitted Data Display */}
                {submittedData && (
                    <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Submitted Data:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(submittedData).map(([key, value]) => (
                                <div key={key} className="flex space-x-2">
                                    <span className="font-medium capitalize">{key}:</span>
                                    <span>{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FullForm;
