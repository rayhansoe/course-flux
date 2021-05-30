import * as courseApi from "../../api/courseApi"
import dispatcher from "../../appDispatcher"
import actionTypes from "../actionTypes"
import { toast } from "react-toastify"

export const saveCourse = course => {
	return courseApi.saveCourse(course).then(savedCourse => {
		dispatcher.dispatch({
			actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
			course: savedCourse,
		})
		course.id ? toast.info("🚀 Course Updated") : toast.info("🚀 Course Saved")
	})
}

export const loadCourses = async () => {
	return await courseApi.getCourses().then(courses => {
		dispatcher.dispatch({
			actionType: actionTypes.LOAD_COURSES,
			courses,
		})
	})
}

export const deleteCourse = courseId => {
	return courseApi.deleteCourse(courseId).then(() => {
		dispatcher.dispatch({
			actionType: actionTypes.DELETE_COURSE,
			courseId,
		})
		toast.error("⚠ Course deleted")
	})
}
