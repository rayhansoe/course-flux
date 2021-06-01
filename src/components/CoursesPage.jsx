import courseStore from "../stores/courseStore"
import { loadCourses, deleteCourse } from "../actions/course/courseActions"
import { useState, useEffect } from "react"
import loadable from "@loadable/component"
import { Link } from "react-router-dom"
const CoursesList = loadable(() => import("./CoursesList"))

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

	return (
		<>
			<h2>Courses</h2>
			<Link className='btn btn-primary' to='/course-flux/course'>
				Add Course
			</Link>
			<CoursesList courses={courses} deleteCourse={deleteCourse} />
		</>
	)
}

export default CoursesPage
