import actionTypes from "../actionTypes"
import * as authorApi from "../../api/authorApi"
import dispatcher from "../../appDispatcher"
import { toast } from "react-toastify"

export const saveAuthor = author => {
	return authorApi.saveAuthor(author).then(savedAuthor => {
		dispatcher.dispatch({
			actionType: author.id ? actionTypes.UPDATE_AUTHOR : actionTypes.CREATE_AUTHOR,
			author: savedAuthor,
		})
		author.id ? toast.info("🚀 Author Updated") : toast.info("🚀 Author Saved")
	})
}

export const loadAuthors = () => {
	return authorApi.getAuthors().then(authors => {
		dispatcher.dispatch({
			actionType: actionTypes.LOAD_AUTHOR,
			authors,
		})
	})
}

export const deleteAuthor = id => {
	return authorApi.deleteAuthor(id).then(() => {
		dispatcher.dispatch({
			actionType: actionTypes.DELETE_AUTHOR,
			id,
		})
		toast.error("⚠ Course deleted")
	})
}
