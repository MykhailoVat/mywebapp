import handle from "../errorHandler/errorsHandler.js";
import tasksController from "./tasksController.js";

class TasksErrorsWrapper {
    constructor(controller) {
        this.controller = controller;
    }

    getAll() {
        try {
            return this.controller.getAll();
        } catch (err) {
            return handle(err)
        }
    }

    create(data) {
        try {
            return this.controller.create(data);
        } catch (err) {
            return handle(err)
        }
    }

    markDone(id) {
        try {
            return  this.controller.markDone(id);
        } catch (err) {
            return handle(err)
        }
    }
}

export default new TasksErrorsWrapper(tasksController);