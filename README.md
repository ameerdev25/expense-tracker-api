

# Expense Tracker

A simple expense tracking application built with Node.js, Express, and Prisma for reference and study purposes. Will add improvement to this from time to time.

## About

This application allows users to track their expenses by creating, reading, updating, and deleting expense records. It also provides a feature to calculate the total amount of expenses.

## Features

* Create, read, update, and delete expense records
* Calculate total amount of expenses
* RESTful API endpoints for expense management

## Technologies Used

* Node.js
* Express.js
* Prisma
* TypeScript

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Application

```bash
npm start
```

## API Endpoints

### Get All Expense Records

* `GET /expense`

### Create a New Expense Record

* `POST /expense`

### Update an Existing Expense Record

* `PUT /expense/:id`

### Delete an Expense Record

* `DELETE /expense/:id`

### Calculate Total Amount of Expenses

* `GET /expense/total`
