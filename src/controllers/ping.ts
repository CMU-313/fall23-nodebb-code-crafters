import * as nconf from 'nconf';
import { Request, Response, NextFunction } from 'express';
import db from '../database';

export const ping = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await db.getObject('config');
        res.status(200).send(req.path === `${nconf.get('relative_path')}/sping` ? 'healthy' : '200');
    } catch (err) {
        next(err);
    }
};

