import { Request, Response } from 'express';

const loggerController: { get: (req: Request, res: Response) => void } = {
    get(req: Request, res: Response): void {
        res.render('admin/development/logger', {});
    },
};

export = loggerController;
