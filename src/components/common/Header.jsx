const Header = () => {
	return (
		<>
			{/* <nav >
			<a href='/'>Home</a> | <a href='/about'>About</a> | <a href='/courses'>Courses</a>
		</nav> */}

			<nav aria-label={"breadcrumb"} className='mt-3'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						{" "}
						<a href='/'>Home</a>
					</li>
					<li className='breadcrumb-item'>
						{" "}
						<a href='/about'>About</a>
					</li>
					<li className='breadcrumb-item'>
						{" "}
						<a href='/courses'>Courses</a>{" "}
					</li>
				</ol>
			</nav>
		</>
	)
}

export default Header
