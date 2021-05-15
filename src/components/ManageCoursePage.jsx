import CourseForm from "./CourseForm"
import React, { useState } from "react"
import { saveCourse } from "../api/courseApi"

const ManageCoursePage = props => {
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	})

	const handleChange = ({ target }) => {
		const updateCourse = { ...course, [target.name]: target.value }
		setCourse(updateCourse)
	}

	const handleSubmit = event => {
		event.preventDefault()
		saveCourse(course).then(() => {
			props.history.push("/courses")
		})
	}

	return (
		<>
			<div className='jumbotron'>
				<h2>Manage Course</h2>
				<h5 className='mt-3 fw-normal'>{props.match.params.slug}</h5>
			</div>

			<CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
		</>
	)
}

export default ManageCoursePage
