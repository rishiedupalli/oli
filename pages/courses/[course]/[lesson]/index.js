 import ReactPlayer from "react-player";
import Link from 'next/link'
import { useRouter } from "next/router";
import motion from 'framer-motion';

function Lesson({ lessonData }) {
    const course = useRouter().query.course

    return (
        <div className="bg-gray-100">
            {lessonData.map(data => {
                return (
                    <div key={data.id}>
                        <a href={`/courses/${course}`}><h1 className="font-bold text-5xl text-red-600 text-center px-4 py-4">{course}</h1></a>
                        <h2 className="font-bold text-3xl text-red-600 text-center px-2 py-2">Lesson #{data.id}: {data.LessonTitle}</h2>
                        <div className="flex h-screen justify-center mx-3">
                            <div className="justify-center">
                                <ReactPlayer url={data.LessonLecture} controls />
                                    <div className="justify-center flex my-3">
                                        <Link href={`/courses/${course}/${data.prevLecture}`}>
                                            <a>
                                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                                    Prev
                                                </button>
                                            </a>
                                        </Link>
                                            <a href={data.LessonNotes} rel="noopener noreferrer" target="_blank">
                                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                                                    Notes
                                                </button>
                                            </a>
                                            <a href={data.LessonProblemSet} rel="noopener noreferrer" target="_blank">
                                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                                                    Problem Set
                                                </button>
                                            </a>
                                            <a href={data.LessonProblemSetSolutions} rel="noopener noreferrer" target="_blank">
                                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                                                    Problem Set Solutions
                                                </button>
                                            </a>
                                        <Link href={`/courses/${course}/${data.nextLecture}`}>
                                            <a>
                                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                                        Next
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}

export async function getStaticProps(context) {

    const { params } = context

    const res = await fetch(
        `${process.env.HOSTNAME}data/courses/${params.course}/${params.lesson}.json`
    )
    const data = await res.json()

    const res2 = await fetch(
        `${process.env.HOSTNAME}data/courses/${params.course}/${params.lesson}.json`
    )
    const data2 = await res2.json()

    return {
        props: {
            lessonData: data,
            courseData: data2
        },
    }
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.HOSTNAME}data/paths.json`)
    const data = await response.json()

    const paths = data.map(path => {
        return {
            params: {
                course: `${path.parent}`,
                lesson: `${path.path}`,
            }
        }
    })
    
    return {
        paths,
        fallback: false,
    }
}

export default Lesson