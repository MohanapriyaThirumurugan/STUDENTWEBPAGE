import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentPanel = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const getTheData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/getstudents');
            setStudents(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle delete function
    const handletodelete = async (studentId) => {
        try {
            const response = await axios.delete('http://127.0.0.1:5000/delstudents', {
                data: { _id: studentId }
            });
            if (response.data.deleted_count > 0) {
                setStudents(students.filter(student => student._id !== studentId));
            } else {
                console.error('No student found to delete');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const handleUpdateClick = (student) => {
        navigate('/update', { state: { student } });
    };

    useEffect(() => {
        getTheData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Student Panel</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {students?.map ? (
                    students.map((student, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h2>
                            <p className="text-gray-600">Course: {student.course}</p>
                            <p className="text-gray-600">Email: {student.email || "N/A"}</p>
                            <div>
                                <button onClick={() => handletodelete(student._id)}>Delete</button>
                            </div>
                            <div>
                                <button onClick={() => handleUpdateClick(student)}>Update</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading data...</p>
                )}
            </div>
        </div>
    );
};

export default StudentPanel;
