import React from "react"

const CourseForm = ({ course, onChange, onSubmit }) => {
	return (
		<form className='course-form' onSubmit={onSubmit}>
			<div className='form-group mt-4'>
				<label htmlFor='title'>Title</label>
				<div className='field'>
					<input
						id='title'
						type='text'
						name='title'
						className='form-control mt-2'
						onChange={onChange}
						value={course.title}
					/>
				</div>
			</div>

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

			<div className='form-group mt-4'>
				<label htmlFor='category'>Category</label>
				<div className='field'>
					<input
						type='text'
						id='category'
						name='category'
						className='form-control mt-2'
						onChange={onChange}
						value={course.category}
					/>
				</div>
			</div>

			<input type='submit' value='Save' className='btn btn-primary mt-3' />
		</form>
	)
}

export default CourseForm
