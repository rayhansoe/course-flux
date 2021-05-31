import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import authorStore from "../stores/authorStore"
import { loadAuthors } from "../actions/author/authorActions"
import React, { useState, useEffect } from "react"

const CoursesList = ({ courses, deleteCourse }) => {
	const [authors, setAuthors] = useState(authorStore.getAuthors())

	useEffect(() => {
		authorStore.addChangeListener(onChangeAuthors)

		if (authors.length === 0) loadAuthors()

		return () => {
			authorStore.removeChangeListener(onChangeAuthors)
		}
	}, [authors.length])

	const onChangeAuthors = () => {
		setAuthors(authorStore.getAuthors())
	}

	const GetName = ({ id, authors }) => {
		return <em>{authors.find(author => author.id === id).name}</em>
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>Title</th>
					<th scope='col'>Author</th>
					<th scope='col'>Category</th>
					<th scope='col'>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(course => {
					return (
						<tr key={course.title}>
							<td>
								<Link to={"/course/" + course.slug}>{course.title}</Link>
							</td>
							<td>
								{authors.length !== 0 ? <GetName id={course.authorId} authors={authors} /> : ""}
							</td>
							<td>{course.category}</td>
							<td>
								<button
									type='button'
									className='btn btn-outline-danger'
									onClick={() => deleteCourse(course.id)}>
									DELETE
								</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

CoursesList.propTypes = {
	deleteCourse: PropTypes.func.isRequired,
	courses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			authorId: PropTypes.number.isRequired,
			category: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default CoursesList
