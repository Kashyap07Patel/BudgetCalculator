import React,{useState} from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoneyIcon from '@mui/icons-material/Money';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Calculations() {

    const [budget, setbudget] = useState(()=>{
        const localdata=localStorage.getItem("budget");
        return localdata !== null ?
        JSON.parse(localdata):[];
    })

    const [expenses, setexpenses] = useState(()=>{
        const localdata=localStorage.getItem("expense");
        return localdata !== null ?
        JSON.parse(localdata):[];
    })
    const [totalExpense, settotalExpense] = useState(()=>{
        let total=0
        expenses.map(expense=>{
            total=total+ parseInt(expense.amount) 
        })
        return(total)
    })
    const [balance, setbalance] = useState(budget-totalExpense)
    return (
        <div style={{display:"flex", width:'500px',justifyContent:'space-between'}}>
            <div>
                <h2>BUDGET</h2>
                <AccountBalanceWalletIcon fontSize="large"/>
                <h2>{budget}</h2>
            </div>
            <div>
                <h2>EXPENSES</h2>
                <MoneyIcon fontSize="large"/>
                <h2>{totalExpense}</h2>
            </div>
            <div>
                <h2>BALANCE</h2>
                <AttachMoneyIcon fontSize="large"/>
                <h2>{balance}</h2>
            </div>
        </div>
    )
}
