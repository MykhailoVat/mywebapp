import tasksService from '../../repositories/tasks/tasksRepository.js';
import tasksRepository from "../../repositories/tasks/tasksRepository.js";

class TasksService {
    constructor(repository) {
        this.repository = repository;

    }

    async getAll() {
        return await this.repository.getAll();
    }

    async create(data) {
       return await this.repository.create(data);
    }

    async markDone(id){
        return await this.repository.markDone(id);
    }
}

export default new TasksService(tasksRepository);