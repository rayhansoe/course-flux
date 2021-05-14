import CoursesPage from "./CoursesPage"
import About from "./About"
import HomePage from "./HomePage"
import Header from "./common/Header"

const App = () => {
	function getPage() {
		const route = window.location.pathname
		if (route === "/courses") return <CoursesPage />
		if (route === "/about") return <About />
		return <HomePage />
	}
	return (
		<div className='container'>
			<Header />
			{getPage()}
		</div>
	)
}

export default App
