import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const CoursesList = ({ courses, authors, deleteCourse }) => {
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
							<td>{course.authorId}</td>
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
