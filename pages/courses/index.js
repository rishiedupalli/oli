import SearchTable from '../../components/filterTable';

function CourseInfo () {
    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className='text-8xl text-red-600 py-5 font-bold'>Our Courses</h1>
            <SearchTable />
        </div>
    )
}

export default CourseInfo