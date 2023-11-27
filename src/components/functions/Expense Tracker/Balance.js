import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import './expense.css'

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '₹ ' + (p[0].split('')[0] === '-' ? '-' : '') +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className="  ">
            <h4 className=' text-slate-300 text-2xl text-center'>Your Balance</h4>
            <h1 className=' text-3xl text-orange-400 text-center  '>{moneyFormatter(total)}</h1>
        </div>
    )
}
