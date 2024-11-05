// UpdateStudent.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Updatestudent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { student } = location.state || {};

    const [name, setName] = useState(student?.name || '');
    const [course, setCourse] = useState(student?.course || '');
    const [email, setEmail] = useState(student?.email || '');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://127.0.0.1:5000/updatestudents', {
                query: { _id: student._id },
                new_value: { name, course, email }
            });
            if (response.status === 200) {
                alert('Student updated successfully');
                navigate('/studentpanel');  // Navigate back to the student panel
            }
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Update Student</h3>
            <form onSubmit={handleUpdate}>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mb-2">
                    Course:
                    <input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mb-4">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Updatestudent;
