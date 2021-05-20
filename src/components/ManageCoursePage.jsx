import CourseForm from "./CourseForm"
import React, { useState, useEffect } from "react"

import { saveCourse, getCourseBySlug } from "../api/courseApi"
import { toast } from "react-toastify"

const ManageCoursePage = props => {
	const [errors, setErrors] = useState({})
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	})

	useEffect(() => {
		const slug = props.match.params.slug
		if (slug) {
			getCourseBySlug(slug).then(_course => setCourse(_course))
		}
	}, [props.match.params.slug])

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
			toast.info("🦄 Wow so easy!")
		})
	}

	return (
		<>
			<div className='jumbotron'>
				<h2>Manage Course</h2>
				<h5 className='mt-3 fw-normal'>{props.match.params.slug}</h5>
			</div>

			<CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
		</>
	)
}

export default ManageCoursePage
