import { Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import loadable from "@loadable/component"
const Header = loadable(() => import("./common/Header"))
const About = loadable(() => import("./About"))
const HomePage = loadable(() => import("./HomePage"))
const CoursesPage = loadable(() => import("./CoursesPage"))
const AuthorsPage = loadable(() => import("./AuthorsPage"))
const NotFoundPage = loadable(() => import("./NotFoundPage"))
const ManageCoursePage = loadable(() => import("./ManageCoursePage"))
const ManageAuthorPage = loadable(() => import("./ManageAuthorPage"))

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
				<Route path='/course-flux/' exact component={HomePage} />
				<Route path='/course-flux/about' component={About} />
				<Route path='/course-flux/courses' component={CoursesPage} />
				<Route path='/course-flux/course/:slug' component={ManageCoursePage} />
				<Route path='/course-flux/course' component={ManageCoursePage} />
				<Route path='/course-flux/authors' component={AuthorsPage} />
				<Route path='/course-flux/author/:slug' component={ManageAuthorPage} />
				<Route path='/course-flux/author/' component={ManageAuthorPage} />
				<Route path='/course-flux/404/' component={NotFoundPage} />
				<Redirect from='/' to='/course-flux/' />
				<Redirect from='/course-flux/home' to='/course-flux/' />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	)
}

export default App
