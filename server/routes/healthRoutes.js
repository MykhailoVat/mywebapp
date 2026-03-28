import {Router} from 'express';

const router = Router();

const getHealthRouter = () => {

    //GET
    router.get('/alive', async (req, res) => {
        res.status(200).send("200, app alive")
    });

    router.get('/ready', async (req, res) => {
        //const result = controller.checkDB()
        //res.status(result.status).json(result.data)
    });

    return router;
}

export default getHealthRouter;