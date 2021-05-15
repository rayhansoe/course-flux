import Header from "./common/Header"
import CoursesPage from "./CoursesPage"
import ManageCoursePage from "./ManageCoursePage"
import About from "./About"
import HomePage from "./HomePage"
import NotFoundPage from "./NotFoundPage"
import { Route, Switch, Redirect } from "react-router-dom"

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/about' component={About} />
				<Route path='/courses' component={CoursesPage} />
				<Route path='/course' component={ManageCoursePage} />
				<Route path='/course/:slug' component={ManageCoursePage} />
				<Redirect from='/home' to='/' />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	)
}

export default App
