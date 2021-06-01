import loadable from "@loadable/component"
const TextInput = loadable(() => import("./common/TextInput"))

const AuthorForm = ({ author, onChange, onSubmit, errors }) => {
	return (
		<>
			<form className='form' onSubmit={onSubmit}>
				<TextInput
					id='name'
					label='Name'
					onChange={onChange}
					name='name'
					value={author.name}
					error={errors.name}
				/>

				<input type='submit' value='Save' className='btn btn-primary mt-3' />
			</form>
		</>
	)
}

export default AuthorForm
