import React, { Component } from 'react'
import Budget from './Budget'
import Calculations from './Calculations'
import Expense from './Expense'
import ExpenseTable from './ExpenseTable'

export default class Homepage extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:"space-evenly"}}>
                <div>
                    <Budget/>
                    <Expense/>
                </div>
                <div>
                    <Calculations/>
                    <ExpenseTable/>
                </div>
               
            </div>
        )
    }
}
