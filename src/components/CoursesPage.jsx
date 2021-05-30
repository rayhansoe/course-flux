import courseStore from "../stores/courseStore"
// import authorStore from "../stores/authorStore"
import { loadCourses, deleteCourse } from "../actions/course/courseActions"
// import { getAuthors } from "../api/authorApi"
import { useState, useEffect } from "react"
import CoursesList from "./CoursesList"
import { Link } from "react-router-dom"

const CoursesPage = () => {
	const [courses, setCourses] = useState(courseStore.getCourses())

	useEffect(() => {
		function subs() {
			courseStore.addChangeLister(onChangeCourses)
		}

		subs()

		if (courseStore.getCourses().length === 0) loadCourses()

		return () => {
			courseStore.removeChangeListener(onChangeCourses)
		}
	}, [courses.length])

	function onChangeCourses() {
		setCourses(courseStore.getCourses())
	}

	// useEffect(() => {
	// 	async function getAu() {
	// 		const response = await getAuthors().then(_au => _au)
	// 		setAuthors(response)
	// 	}
	// 	getAu()
	// }, [])

	// useEffect(() => {
	// 	function sub() {
	// 		authorStore.addChangeListener(onChangeAuthors)
	// 	}

	// 	sub()

	// 	if (authorStore.getAuthors().length === 0) loadAuthors()

	// 	return () => {
	// 		authorStore.removeChangeListener(onChangeAuthors)
	// 	}
	// }, [authors.length])

	return (
		<>
			<h2>Courses</h2>
			<Link className='btn btn-primary' to='/course'>
				Add Course
			</Link>
			<CoursesList courses={courses} deleteCourse={deleteCourse} />
		</>
	)
}

export default CoursesPage
