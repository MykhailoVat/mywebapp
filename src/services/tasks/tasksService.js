import tasksService from '../../repositories/tasks/tasksRepository.js';
import tasksRepository from "../../repositories/tasks/tasksRepository.js";

class TasksService {
    constructor(repository) {
        this.repository = repository;

    }

    getAll() {
        return this.repository.getAll();
    }

    create(data) {
       return this.repository.create(data);
    }

    markDone(id){
        return this.repository.markDone(id);
    }
}

export default new TasksService(tasksRepository);