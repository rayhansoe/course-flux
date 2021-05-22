import { EventEmitter } from "events"

const CHANGE_EVENT = "change"

class CoursesStore extends EventEmitter {
	addChangeLister(callback) {
		this.on(CHANGE_EVENT, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

	emitChange(callback) {
		this.emit(CHANGE_EVENT, callback)
	}
}

const store = new CoursesStore()

export default store
