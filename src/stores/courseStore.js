import { EventEmitter } from "events"
import Dispatcher from "../appDispatcher"
import actionTypes from "../actions/actionTypes"

const CHANGE_EVENT = "change"
let _courses = []

class CoursesStore extends EventEmitter {
	addChangeLister(callback) {
		this.on(CHANGE_EVENT, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

	emitChange() {
		this.emit(CHANGE_EVENT)
	}

	getCourses() {
		return _courses
	}

	getCoursesBySlug(slug) {
		return _courses.find(course => course.slug === slug)
	}
}

const store = new CoursesStore()

Dispatcher.register(action => {
	switch (action.actionType) {
		case actionTypes.CREATE_COURSE:
			_courses.push(action.course)
			store.emitChange()
			break

		case actionTypes.LOAD_COURSES:
			_courses = action.courses
			store.emitChange()
			break

		case actionTypes.UPDATE_COURSE:
			_courses = _courses.map(course => (course.id === action.course.id ? action.course : course))
			store.emitChange()
			break

		case actionTypes.DELETE_COURSE:
			_courses = _courses.filter(course => course.id !== parseInt(action.courseId, 10))
			store.emitChange()
			break

		default:
	}
})

export default store
