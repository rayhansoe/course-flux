import { getCourses } from "../api/courseApi"
import { useState, useEffect } from "react"
import CoursesList from "./CoursesList"
import { Link } from "react-router-dom"

const CoursesPage = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		getCourses().then(_courses => setCourses(_courses))
	}, [])

	return (
		<>
			<h2>Courses</h2>
			<Link className='btn btn-primary' to='/course'>
				Add Course
			</Link>
			<CoursesList courses={courses} />
		</>
	)
}

export default CoursesPage
