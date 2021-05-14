import { Link } from "react-router-dom"

const NotFoundPage = () => {
	return (
		<div className='jumbotron'>
			<h2 className='fw-bold'>Page Not Found</h2>
			<Link to='/'>Back to Home</Link>
		</div>
	)
}

export default NotFoundPage
