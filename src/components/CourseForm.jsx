import { useState, useEffect } from "react"
import loadable from "@loadable/component"
import { loadAuthors } from "../actions/author/authorActions"
import authorStore from "../stores/authorStore"
import PropTypes from "prop-types"
const TextInput = loadable(() => import("./common/TextInput"))
const DropDown = loadable(() => import("./common/DropDown"))

const CourseForm = ({ course, onChange, onSubmit, errors }) => {
	const [authors, setAuthors] = useState(authorStore.getAuthors())

	const onChangeAuthors = () => {
		setAuthors(authorStore.getAuthors())
	}

	useEffect(() => {
		authorStore.addChangeListener(onChangeAuthors)

		if (authorStore.getAuthors().length === 0) loadAuthors()

		return () => {
			authorStore.removeChangeListener(onChangeAuthors)
		}
	}, [authors.length])

	return (
		<form className='form' onSubmit={onSubmit}>
			<TextInput
				id='title'
				label='Title'
				onChange={onChange}
				name='title'
				value={course.title}
				error={errors.title}
			/>

			<DropDown
				id='author'
				name='authorId'
				onChange={onChange}
				course={course}
				authors={authors}
				errors={errors}
			/>

			<TextInput
				id='category'
				label='Category'
				onChange={onChange}
				name='category'
				value={course.category}
				error={errors.category}
			/>

			<input type='submit' value='Save' className='btn btn-primary mt-3' />
		</form>
	)
}

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
}

export default CourseForm
