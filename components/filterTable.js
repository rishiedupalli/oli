import React from 'react';
import { useState } from 'react';
import data from '../public/data/CourseInfo.json';
import { motion } from "framer-motion"

const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div className="flex rounded items-center justify-center p-5">
                <input className="px-4 py-2 w-3/4 text-center border-black border-2 text-black" type="text" placeholder="Search our courses" onChange={(e) => {setSearchTerm(e.target.value)}} />
            </div>
            <div className='p-5 flex rounded items-center justify-center'>
                <motion.table className='table-fixed border-collapse p-5'>
                    <thead>
                        <tr>
                            <th className='text-left border-2 p-2'>Course Title</th>
                            <th className='text-left border-2 p-2'>Level</th>
                            <th className='text-left border-2 p-2'>Prerequisite</th>
                            <th className='text-left border-2 p-2'>Textbooks</th>
                            <th className='text-left border-2 p-2'>Course Description</th>
                            <th className='text-left border-2 p-2'>Topics Covered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter(val => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase()) || val.textbooks.toLowerCase().includes(searchTerm.toLowerCase()) || val.topics.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map(course => (
                            <tr key={course.id}>
                                <motion.td whileHover={{ scale: 1.1 }} className='border-2 p-2 font-extrabold text-center'><a href={`/courses/${course.title}`}>{course.title}</a></motion.td>
                                <td className='border-2 p-2 text-left'>{course.level}</td>
                                <td className='border-2 p-2 text-left'>{course.prereq}</td>
                                <td className='border-2 p-2 text-left'>{course.textbooks}</td>
                                <td className='border-2 p-2 text-left'>{course.description}</td>
                                <td className='border-2 p-2 text-left'>{course.topics}</td>
                            </tr> 
                        ))}
                    </tbody>
                </motion.table>
            </div>
        </div>
    )
};

export default SearchTable