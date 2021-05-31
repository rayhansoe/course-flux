import React, { useState, useEffect } from "react"
import { saveAuthor, loadAuthors } from "../actions/author/authorActions"
import authorStore from "../stores/authorStore"
import AuthorForm from "./AuthorForm"
import { useHistory } from "react-router-dom"

const ManageAuthorPage = props => {
	const history = useHistory()
	const [authors, setAuthors] = useState(authorStore.getAuthors())
	const [errors, setErrors] = useState({})
	const [author, setAuthor] = useState({
		id: null,
		name: "",
		slug: "",
	})

	useEffect(() => {
		authorStore.addChangeListener(onChange)
		const slug = props.match.params.slug

		if (authors.length === 0) {
			loadAuthors()
		} else if (slug) {
			if (authorStore.getAuthorsBySlug(slug)) {
				setAuthor(authorStore.getAuthorsBySlug(slug))
			} else {
				history.push("/404")
			}
		}

		return () => {
			authorStore.removeChangeListener(onChange)
		}
	}, [authors.length, history, props.match.params.slug])

	function onChange() {
		setAuthors(authorStore.getAuthors())
	}

	const formIsValid = () => {
		const _error = {}

		if (!author.name) _error.name = "Name is required"

		setErrors(_error)
		// Form is valid if the errors object has no props.
		return Object.keys(_error).length === 0
	}

	const handleChange = ({ target }) => {
		const updateCourse = { ...author, [target.name]: target.value }
		setAuthor(updateCourse)
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!formIsValid()) return
		saveAuthor(author).then(() => {
			props.history.push("/authors")
		})
	}

	return (
		<>
			<div className='jumbotron'>
				<h2>Manage Course</h2>
				{/* <h5 className='mt-3 fw-normal'>{props.match.params.slug}</h5> */}
				{props.match.params.slug ? <h5 className='mt-3 fw-normal'>{author.name}</h5> : ""}
			</div>

			<AuthorForm author={author} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
		</>
	)
}

export default ManageAuthorPage
