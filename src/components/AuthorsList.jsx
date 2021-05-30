import { Link } from "react-router-dom"

const AuthorsList = ({ authors }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>Name</th>
				</tr>
			</thead>
			<tbody>
				{authors.map(author => {
					return (
						<tr key={author.id}>
							<td>{author.id}</td>
							<td>
								<Link to={"/author/" + author.name}>{author.name}</Link>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default AuthorsList
