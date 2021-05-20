import React from "react"
import TextInput from "./common/TextInput"
import PropTypes from "prop-types"

const CourseForm = ({ course, onChange, onSubmit, errors }) => {
	return (
		<form className='course-form' onSubmit={onSubmit}>
			<TextInput
				id='title'
				label='Title'
				onChange={onChange}
				name='title'
				value={course.title}
				error={errors.title}
			/>

			<div className='form-group mt-4'>
				<label htmlFor='author'>Author</label>
				<div className='field'>
					<select
						id='author'
						name='authorId'
						onChange={onChange}
						value={course.authorId || ""}
						className='form-control mt-2'>
						<option value='' />
						<option value='1'>Cory House</option>
						<option value='2'>Scott Allen</option>
					</select>
				</div>
				{errors.authorId && <div className='alert alert-danger'>{errors.authorId}</div>}
			</div>

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
