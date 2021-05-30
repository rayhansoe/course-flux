import { NavLink } from "react-router-dom"

const Header = () => {
	const activeStyle = { color: "gray" }

	return (
		<nav aria-label={"breadcrumb"} className='mt-3'>
			<ol className='breadcrumb'>
				<NavLink className='breadcrumb-item' exact to='/' activeStyle={activeStyle}>
					Home
				</NavLink>
				<NavLink className='breadcrumb-item' to='/about' activeStyle={activeStyle}>
					About
				</NavLink>
				<NavLink className='breadcrumb-item' to='/courses' activeStyle={activeStyle}>
					Courses
				</NavLink>
				<NavLink className='breadcrumb-item' to='/authors' activeStyle={activeStyle}>
					authors
				</NavLink>
			</ol>
		</nav>
	)
}

export default Header
