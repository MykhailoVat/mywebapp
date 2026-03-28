import tasksService from "../../services/tasks/tasksService.js";

class TasksController {
    constructor(service) {
        this.service = service;
    }

    getAll() {
        const data = this.service.getAll();
        return {
            status: 200,
            data: data
        };
    }

    create(body) {
        const task = this.service.create(body);
        return {
            status: 201,
            data: task
        };
    }

    markDone(id) {
        const task = this.service.markDone(id);
        return {
            status: 200,
            data: task
        };
    }
}

export default new TasksController(tasksService);