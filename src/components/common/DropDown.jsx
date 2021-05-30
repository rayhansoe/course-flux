const DropDown = ({ id, name, onChange, course, errors, authors }) => {
	return (
		<div className='form-group mt-4'>
			<label htmlFor='author'>{id.toUpperCase()}</label>
			<div className='field'>
				<select
					id={id}
					name={name}
					onChange={onChange}
					value={course.authorId || ""}
					className='form-control mt-2'>
					<option value='' />
					{authors.map(author => {
						return (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						)
					})}
				</select>
			</div>
			{errors.authorId && <div className='alert alert-danger'>{errors.authorId}</div>}
		</div>
	)
}

export default DropDown
