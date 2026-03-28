import {Router} from 'express';

const router = Router();

const getTasksRouter = () => {

    //GET
    router.get('/', async (req, res) => {
        //const result = controller.getAllTasks()
        //res.status(result.status).json(result.data)
    });

    //POST
    router.post('/', async (req, res) => {
        //const result = controller.create(req.body)
        //res.status(result.status).json(result.data)
    });

    router.post('/:id/done', async (req, res) => {
        //const id = req.params.id
        //const result = controller.markDone(id)
        //res.status(result.status).json(result.data)
    });

    return router;
}

export default getTasksRouter;