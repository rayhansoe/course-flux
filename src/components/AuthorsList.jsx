import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const AuthorsList = ({ authors, deleteAuthor }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>Name</th>
					<th scope='col'>Action</th>
				</tr>
			</thead>
			<tbody>
				{authors.map((author, index) => {
					return (
						<tr key={author.id}>
							<td>{index + 1}</td>
							<td>
								<Link to={"/course-flux/author/" + author.slug}>{author.name}</Link>
							</td>
							<td>
								<button
									type='button'
									className='btn btn-outline-danger'
									onClick={() => deleteAuthor(author.id)}
									disabled>
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

AuthorsList.propTypes = {
	// deleteCourse: PropTypes.func.isRequired,
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default AuthorsList
