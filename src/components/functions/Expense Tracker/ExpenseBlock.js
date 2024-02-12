import React from 'react'
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../../../context/GlobalState';
import './expense.css'


const ExpenseBlock = () => {
    return (
        <div className="  ">
            <GlobalProvider>
                <Header />
                <div className="container">
                    <Balance />
                    <IncomeExpenses />
                    <AddTransaction />
                    <TransactionList />
                </div>
            </GlobalProvider>
        </div>
    )
}

export default ExpenseBlock
