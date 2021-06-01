import { NavLink } from "react-router-dom"

const Header = () => {
	const activeStyle = { color: "gray" }

	return (
		<nav aria-label={"breadcrumb"} className='mt-3'>
			<ol className='breadcrumb'>
				<NavLink className='breadcrumb-item' exact to='/course-flux/' activeStyle={activeStyle}>
					Home
				</NavLink>
				<NavLink className='breadcrumb-item' to='/course-flux/about' activeStyle={activeStyle}>
					About
				</NavLink>
				<NavLink className='breadcrumb-item' to='/course-flux/courses' activeStyle={activeStyle}>
					Courses
				</NavLink>
				<NavLink className='breadcrumb-item' to='/course-flux/authors' activeStyle={activeStyle}>
					Authors
				</NavLink>
			</ol>
		</nav>
	)
}

export default Header
