import Header from "./common/Header"
import CoursesPage from "./CoursesPage"
import AuthorsPage from "./AuthorsPage"
import ManageCoursePage from "./ManageCoursePage"
import ManageAuthorPage from "./ManageAuthorPage"
import About from "./About"
import HomePage from "./HomePage"
import NotFoundPage from "./NotFoundPage"
import { Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
	return (
		<div className='container'>
			<Header />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/about' component={About} />
				<Route path='/courses' component={CoursesPage} />
				<Route path='/course/:slug' component={ManageCoursePage} />
				<Route path='/course' component={ManageCoursePage} />
				<Route path='/authors' component={AuthorsPage} />
				<Route path='/author/:slug' component={ManageAuthorPage} />
				<Route path='/author/' component={ManageAuthorPage} />
				<Route path='/404/' component={NotFoundPage} />
				<Redirect from='/home' to='/' />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	)
}

export default App
