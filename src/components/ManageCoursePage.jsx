const ManageCoursePage = props => {
	return (
		<div className='jumbotron'>
			<h2>Manage Course</h2>
			<h5 className='mt-3 fw-normal'>{props.match.params.slug}</h5>
		</div>
	)
}

export default ManageCoursePage
