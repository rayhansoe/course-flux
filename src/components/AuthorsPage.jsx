import { useState, useEffect } from "react"
import authorStore from "../stores/authorStore"
import { loadAuthors, deleteAuthor } from "../actions/author/authorActions"
import { Link } from "react-router-dom"
import loadable from "@loadable/component"
const AuthorsList = loadable(() => import("./AuthorsList"))

const AuthorsPage = () => {
	const [authors, setAuthors] = useState(authorStore.getAuthors())

	useEffect(() => {
		function sub() {
			authorStore.addChangeListener(onChange)
		}

		sub()

		if (authorStore.getAuthors().length === 0) loadAuthors()

		return () => {
			authorStore.removeChangeListener(onChange)
		}
	}, [])

	function onChange() {
		setAuthors(authorStore.getAuthors())
	}

	return (
		<>
			<h2>Courses</h2>
			<Link className='btn btn-primary' to='/course-flux/author'>
				Add Course
			</Link>
			<AuthorsList authors={authors} deleteAuthor={deleteAuthor} />
		</>
	)
}

export default AuthorsPage
