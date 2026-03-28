import {Router} from 'express';

const router = Router();
import tasksController from '../../../controllers/tasks/tasksWrapper.js';

const getTasksRouter = () => {

    //GET
    router.get('/', async (req, res) => {
        const result = tasksController.getAll()
        res.status(result.status).json(result.data)
    });

    //POST
    router.post('/', async (req, res) => {
        const result = tasksController.create(req.body)
        res.status(result.status).json(result.data)
    });

    router.post('/:id/done', async (req, res) => {
        const id = req.params.id
        const result = tasksController.markDone(id)
        res.status(result.status).json(result.data)
    });

    return router;
}

export default getTasksRouter;