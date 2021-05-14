import { getCourses } from "../api/courseApi"
import { useState, useEffect } from "react"
import CoursesList from "./CoursesList"

const CoursesPage = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		getCourses().then(_courses => setCourses(_courses))
	}, [])

	return (
		<>
			<h2>Courses</h2>
			<CoursesList courses={courses} />
		</>
	)
}

export default CoursesPage
