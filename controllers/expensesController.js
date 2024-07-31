const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const expensesController = asyncHandler(async (req, res) => {
    const {
        friends,
        total,
        method,
        share,
    } = req.body;

    const expenses = [];

    try {

        for (let i = 0; i < friends.length; i++) {
            if (method === 'Equal') {
                expenses.push(total / friends.length);
            } else if (method === 'Exact') {
                expenses.push(share[i]);
            } else {
                expenses.push((total * share[i]) / 100);
            }
        }

        const expensesList = friends.reduce((acc, friend, index) => {
            acc[friend] = expenses[index];
            return acc;
        }, {});

        res.status(200).json(expensesList);

    } catch {
        res.status(400).json('Invalid data');
    }
})

module.exports = expensesController;
