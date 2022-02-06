import React from 'react';
import { useState } from 'react';
import data from '../public/data/CourseInfo.json';

const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <input type="text" placeholder="Search for Information about our Courses" onChange={(e) => {
                setSearchTerm(e.target.value)
            }} />
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Textbooks</th>
                        <th>Course Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(val => {
                        if (searchTerm === '') {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase()) || val.textbooks.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map(course => (
                        <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.textbooks}</td>
                        <td>{course.description}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default SearchTable