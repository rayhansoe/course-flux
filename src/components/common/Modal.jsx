const Modal = ({ status, onClick, deleteCourse, styles, id, course, authors }) => {
	return (
		<div
			className={status ? "modal fade show pt-5" : "modal fade"}
			id='exampleModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden={!status ? status : "none"}
			aria-modal={status ? `${status}` : "none"}
			style={status ? { display: styles() } : { display: "none" }}
			role={status ? "dialog" : "none"}
			onClick={e => {
				onClick()
				e.stopPropagation()
			}}>
			<div className={status ? "modal-dialog  modal-md mt-5" : "modal-dialog"}>
				<div className='modal-content' onClick={e => e.stopPropagation()}>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Course
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={() => {
								onClick()
							}}></button>
					</div>
					<div className='modal-body'>
						<h5>Title: {course.title}</h5>
						<h5>AuthorId: {course.authorId}</h5>
						<h5>Category: {course.category}</h5>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
							onClick={() => onClick()}>
							Close
						</button>
						<button
							type='button'
							className='btn btn-danger'
							onClick={e => {
								e.stopPropagation()
								deleteCourse(id)
								onClick()
							}}>
							DELETE
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
