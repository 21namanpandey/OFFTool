import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../../../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className=" ">
            <h3 className=' text-slate-300 text-2xl '>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}
