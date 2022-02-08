import SearchTable from '../../components/filterTable';
import Head from 'next/head'
import { motion } from "framer-motion";

function CourseInfo () {
    return (

        <motion.div className="flex flex-col items-center h-screen bg-gray-100">
            <Head>
                <title>Courses</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.h1 className='text-8xl text-red-600 font-bold'>Our Courses</motion.h1>
            <motion.div className="w-3/4">
                <SearchTable />
            </motion.div>
        </motion.div>
    )
}

export default CourseInfo