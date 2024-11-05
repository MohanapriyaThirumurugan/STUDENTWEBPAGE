import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Studentcreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        email: '',
    });

    // Update form data on input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:5000/students', 
                [formData],  // Pass as an array if the API expects an array
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
    
            // Handle response if needed
            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        
        <div className="max-w-md mx-auto mt-24 p-4 border rounded-lg shadow ">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="course">
                        Course
                    </label>
                    <input
                        type="text"
                        id="course"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your course"
                        value={formData.course}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                        Email ID
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div>
                <button
                    onClick={() => navigate('/studentpanel')}
                    className="w-full py-2 text-black text-end font-bold"
                >
                    Go to Student Panel
                </button>
            </div>
        </div>
        
    );
};

export default Studentcreate;
