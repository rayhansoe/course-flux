import * as courseApi from "../api/courseApi"
import dispatcher from "../appDispatcher"
import actionTypes from "./actionTypes"

export const saveCourse = course => {
	return courseApi.saveCourse(course).then(savedCourse => {
		dispatcher.dispatch({
			actionType: actionTypes.CREATE_COURSE,
			course: savedCourse,
		})
	})
}
