import { Request, Response, NextFunction } from "express";

export const useReferer = (req: Request, res: Response, next: NextFunction) => {
    const referer = req.headers.referer;
    if (!referer) {
        return res.redirect(
            307,
            `/?source=${req.originalUrl}&message=hot-linking-not-allowed`
        );
    }
    next();
};
