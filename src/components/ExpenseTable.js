import React,{useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExpenseTable() {

    const [expenses, setexpenses] = useState(()=>{
        const localdata=localStorage.getItem("expense");
        return localdata !== null ?
        JSON.parse(localdata):[];
    })
    
    

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ width: '500px' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Expense Title</TableCell>
                        <TableCell align="right">Expense Amount</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {expenses.map((expense) => (
                        <TableRow
                        key={expense.title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right">{expense.title}</TableCell>
                        <TableCell align="right">{expense.amount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}
