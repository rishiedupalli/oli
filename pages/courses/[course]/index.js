import { useRouter } from 'next/router'
import Link from 'next/link'

function Course({ courseData }) {

    const router = useRouter()
    const courseTitle = router.query.course
    return (
        <>
        <div>
            <h1 className="font-bold text-4xl text-green-300 text-center">Lessons for {courseTitle}</h1>
            <br />
            {courseData.map(lesson => {
                return (
                    <ul key={lesson.id}>
                        <Link href={`${courseTitle}/${lesson.LessonTitle}`}>
                            <a>
                                <li className="text-2xl">{lesson.LessonTitle}</li>
                            </a>
                        </Link>
                    </ul>
                )
            })

            }
        </div>
        </>
    )
}

export async function getStaticProps(context) {

    const { params } = context

    const res = await fetch(
        `${process.env.HOSTNAME}data/courses/${params.course}.json`
    )
    const data = await res.json()

    return {
        props: {
            courseData: data
        },
    }
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.HOSTNAME}data/courses.json`)
    const data = await response.json()

    const paths = data.map(course => {
        return {
            params: {
                course: `${course.Title}`
            }
        }
    })
    
    return {
        paths,
        fallback: false,
    }
}

export default Course