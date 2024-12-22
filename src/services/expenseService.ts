import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getAllExpenses = async () => {
    return await prisma.expense.findMany();
}

export const createExpense = async (data: Prisma.ExpenseCreateInput) => {
    return await prisma.expense.create({
        data
    });
}

export const updateExpense = async (id: number, data: Prisma.ExpenseUpdateInput) => {
    return await prisma.expense.update({
        where: {id},
        data
    })
}

export const deleteExpense = async (id: number) => {
    return await prisma.expense.delete({
        where: {id}
    })
}

export const totalAmount = async () => {
    let result = await prisma.expense.aggregate({
        _sum: { 
            amount: true
        }
    })

    return result._sum.amount;
}