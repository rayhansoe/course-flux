import React from "react"
import TextInput from "./common/TextInput"

const CourseForm = ({ course, onChange, onSubmit }) => {
	return (
		<form className='course-form' onSubmit={onSubmit}>
			<TextInput id='title' label='Title' onChange={onChange} name='title' value={course.title} />

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
			</div>

			<TextInput
				id='category'
				label='Category'
				onChange={onChange}
				name='category'
				value={course.category}
			/>

			<input type='submit' value='Save' className='btn btn-primary mt-3' />
		</form>
	)
}

export default CourseForm
