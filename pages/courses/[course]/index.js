import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Course({ courseData }) {

    const router = useRouter()
    const courseTitle = router.query.course
    return (
        <div className="bg-gray-100 h-screen">
            <div>
                <h1 className="font-bold text-4xl text-red-600 text-center py-4">Lessons for {courseTitle}</h1>
                <br />
                <div>
                    {courseData.map(lesson => {
                            return (
                                <motion.ul key={lesson.id} className="flex justify-center items-center text-left">
                                    <Link href={`${courseTitle}/${lesson.LessonTitle}`}>
                                        <a>
                                            <motion.li whileHover={{scale : 1.1}} className="text-2xl">{lesson.LessonTitle}</motion.li>
                                        </a>
                                    </Link>
                                </motion.ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
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