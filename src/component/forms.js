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
    });
    const [submittedData, setSubmittedData] = useState(null);

    // Handler to update formData based on input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Bio Form</h1>
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Name:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Username:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Password:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Date of Birth:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div className='block text-sm font-medium text-gray-700 mb-2'>
                    <label className='flex items-center'>Gender:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    /> Female
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Nationality:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Enter your nationality"
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Add Feedback:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Enter text"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Age:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />
                </div>

                <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Drinks:</label>
                    <input className='border-2 border-black border-solid rounded-md p-0.5'
                        type="checkbox"
                        name="tea"
                        checked={formData.tea}
                        onChange={handleChange}
                    /> Tea
                    <input
                        type="checkbox"
                        name="coffee"
                        checked={formData.coffee}
                        onChange={handleChange}
                    /> Coffee
                </div>

                <div>
                    <label>Status:</label>
                    <input
                        type="radio"
                        name="status"
                        value="option1"
                        checked={formData.status === 'option1'}
                        onChange={handleChange}
                    /> Single
                    <input
                        type="radio"
                        name="status"
                        value="option2"
                        checked={formData.status === 'option2'}
                        onChange={handleChange}
                    /> Married
                </div>

                <div>
                    <label>Select Your State:</label>
                    <select name="select" value={formData.select} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="lagos">Lagos</option>
                        <option value="ogun">Ogun</option>
                        <option value="kano">Kano</option>
                    </select>
                </div>

                <div>
                    <label>Add Your Comment:</label>
                    <textarea
                        name="textarea"
                        value={formData.textarea}
                        onChange={handleChange}
                        placeholder="Enter text here"
                    />
                </div>

                <button className='w-auto bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium' type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Username: {submittedData.username}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Password: {submittedData.password}</p>
                    <p>Phone Number: {submittedData.phone}</p>
                    <p>Date: {submittedData.date}</p>
                    <p>Gender: {submittedData.gender}</p>
                    <p>Nationality: {submittedData.nationality}</p>
                    <p>Text: {submittedData.text}</p>
                    <p>Number: {submittedData.number}</p>
                    <p>Coffee: {submittedData.coffee ? "Selected" : "Not Selected"}</p>
                    <p>Status: {submittedData.status}</p>
                    <p>Select: {submittedData.select}</p>
                    <p>Comment: {submittedData.textarea}</p>
                </div>
            )}
        </div>
    );
}

export default FullForm;
