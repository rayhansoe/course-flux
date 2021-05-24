import courseStore from "../stores/courseStore"
import { loadCourses, deleteCourse } from "../actions/courseActions"
import { useState, useEffect } from "react"
import CoursesList from "./CoursesList"
import { Link } from "react-router-dom"
import { getAuthors } from "../api/authorApi"

const CoursesPage = () => {
	const [courses, setCourses] = useState(courseStore.getCourses())
	const [authors, setAuthors] = useState([])

	const onChange = () => {
		setCourses(courseStore.getCourses())
	}

	useEffect(() => {
		courseStore.addChangeLister(onChange)
		if (courseStore.getCourses().length === 0) loadCourses()
		return () => courseStore.removeChangeListener(onChange)
	}, [courses.length])

	useEffect(() => {
		getAuthors().then(_authors => setAuthors(_authors))
	}, [])

	return (
		<>
			<h2>Courses</h2>
			<Link className='btn btn-primary' to='/course'>
				Add Course
			</Link>
			<CoursesList courses={courses} authors={authors} deleteCourse={deleteCourse} />
		</>
	)
}

export default CoursesPage
