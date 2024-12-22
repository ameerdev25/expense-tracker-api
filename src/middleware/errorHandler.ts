import { NextFunction, Request, Response } from "express";

export class AppError extends Error {
    public statusCode: number;

    constructor(message: string,statusCode: number = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.log("Error: ", err);
    res.status(statusCode).json({ error: message });
};