import {Router} from 'express';

const router = Router();

const getBaseRouter = () => {

    //GET
    router.get('/', async (req, res) => {
       //all routes
    });

    return router;
}

export default getBaseRouter;