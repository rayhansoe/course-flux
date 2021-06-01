import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import authorStore from "../stores/authorStore"
import { loadAuthors } from "../actions/author/authorActions"
import { useState, useEffect } from "react"
import loadable from "@loadable/component"
const Modal = loadable(() => import("./common/Modal"))

const CoursesList = ({ courses, deleteCourse }) => {
	const [authors, setAuthors] = useState(authorStore.getAuthors())
	const [status, setStatus] = useState(false)
	const [courseId, setCourseId] = useState()
	const [course, setCourse] = useState()

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

	const handleChange = () => {
		if (!status) {
			setStatus(!status)
		} else {
			setCourse({})
			setCourseId(null)
			setStatus(!status)
		}
	}

	const changeCourse = (course, id) => {
		setCourseId(id)
		setCourse(course)
	}

	const styles = () => {
		return "block"
	}

	return (
		<>
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Title</th>
							<th scope='col'>Author</th>
							<th scope='col'>Category</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course, index) => {
							return (
								<tr key={index}>
									<td>
										<Link to={"/course-flux/course/" + course.slug}>{course.title}</Link>
									</td>
									<td>
										{authors.length !== 0 ? (
											<GetName id={course.authorId} authors={authors} />
										) : (
											"none"
										)}
									</td>
									<td>{course.category}</td>
									<td>
										<button
											type='button'
											className='btn btn-outline-danger'
											data-bs-toggle='modal'
											data-bs-target='#exampleModal'
											onClick={() => {
												handleChange()
												changeCourse(course, course.id)
											}}>
											DELETE
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			{/* <!-- Modal --> */}
			<Modal
				status={status}
				onClick={handleChange}
				deleteCourse={deleteCourse}
				styles={styles}
				id={courseId ? courseId : null}
				course={course ? course : {}}
				authors={authors ? authors : []}
			/>
		</>
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
