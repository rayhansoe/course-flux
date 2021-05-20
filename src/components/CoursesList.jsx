import { Link } from "react-router-dom"

const CoursesList = ({ courses }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>Title</th>
					<th scope='col'>Author ID</th>
					<th scope='col'>Category</th>
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
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default CoursesList
