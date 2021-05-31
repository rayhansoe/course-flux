import CourseForm from "./CourseForm"
import React, { useState, useEffect } from "react"
import courseStore from "../stores/courseStore"
import { saveCourse, loadCourses } from "../actions/course/courseActions"
import { useHistory } from "react-router-dom"

const ManageCoursePage = props => {
	const [errors, setErrors] = useState({})
	let history = useHistory()
	const [courses, setCourses] = useState(courseStore.getCourses())
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	})

	useEffect(() => {
		courseStore.addChangeLister(onChange)
		const slug = props.match.params.slug

		if (courses.length === 0) {
			loadCourses()
		} else if (slug) {
			if (courseStore.getCoursesBySlug(slug)) {
				setCourse(courseStore.getCoursesBySlug(slug))
			} else {
				history.push("/404")
			}
		}

		return () => courseStore.removeChangeListener(onChange)
	}, [courses.length, history, props.match.params.slug])
	function onChange() {
		setCourses(courseStore.getCourses())
	}

	const formIsValid = () => {
		const _error = {}

		if (!course.title) _error.title = "Title is required"
		if (!course.authorId) _error.authorId = "Author is required"
		if (!course.category) _error.category = "Category is required"

		setErrors(_error)
		// Form is valid if the errors object has no props.
		return Object.keys(_error).length === 0
	}

	const handleChange = ({ target }) => {
		const updateCourse = { ...course, [target.name]: target.value }
		setCourse(updateCourse)
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!formIsValid()) return
		saveCourse(course).then(() => {
			props.history.push("/courses")
		})
	}

	return (
		<>
			<div className='jumbotron'>
				<h2>Manage Course</h2>
				{props.match.params.slug ? <h5 className='mt-3 fw-normal'>{course.title}</h5> : ""}
			</div>

			<CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
		</>
	)
}

export default ManageCoursePage
