import SearchTable from '../../components/filterTable';

function CourseInfo () {
    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className='text-8xl text-green-300 py-5'>Course Information Database</h1>
            <SearchTable />
        </div>
    )
}

export default CourseInfo