import { Request, Response, Router } from "express";
import * as expenseService from "../services/expenseService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const expenses = await expenseService.getAllExpenses();
    res.json(expenses);
});

router.post("/", async (req, res, next) => {
    try {
        const expense = await expenseService.createExpense(req.body);
        res.json(expense); 
    } catch (err) {
        next(err)
    }    
});

router.put("/:id", async (req, res) => {
    const expense = await expenseService.updateExpense(Number(req.params.id), req.body);
    res.json(expense);
});

router.delete("/:id", async (req, res, next) => {
    try {
        const expense = await expenseService.deleteExpense(Number(req.params.id));
        res.json(expense);    
    } catch (err) {
        next(err)
    }    
})

router.get("/total", async (req, res) => {
    const total = await expenseService.totalAmount();
    res.json(total);
})

export default router;