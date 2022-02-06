import Link from 'next/link'

function Courses( {courses }) {
    return <>
    <h1 className="text-8xl text-green-300 font-bold text-center">Course Offerings</h1>
    <Link href="/courses/CourseInfo"><a><h2 className="text-6xl text-green-300 font-bold text-center">Advanced Search</h2></a></Link>
        {
            courses.map(course => {
                return (
                    <div key={course.id}>
                        <Link href={`/courses/${course.Title}`}>
                            <a>
                                <p className="text-4xl font-bold text-green-300">{course.Title}</p>
                            </a>
                        </Link>
                    </div>
                )
            })
        }
    </>

}

export async function getStaticProps() {
    const response = await fetch(`${process.env.HOSTNAME}data/courses.json`)
    const data = await response.json()

    return {
        props: {
            courses: data,
        },
    }
}

export default Courses