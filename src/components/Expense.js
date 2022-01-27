import React,{useRef,useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Expense() {

    const title = useRef()
    const amount = useRef()
    const [expense, setexpense] = useState(()=>{
        const localdata=localStorage.getItem("expense");
        return localdata !== null ?
        JSON.parse(localdata):[];
    })

    const addHandler=()=>{
        let newexpense = [...expense,{title:title.current.value, amount:amount.current.value}];
        setexpense(newexpense);
        localStorage.setItem('expense',JSON.stringify(newexpense));
        window.location.reload(true)
    }

    return (
        <div className="expense">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>Please Enter Expense Title</div>
                <TextField 
                id="title" 
                label="Expense Title" 
                variant="outlined" 
                inputRef={title}
                />
                <div>Please Enter Expense Amount</div>
                <TextField 
                id="amount" 
                label="Amount" 
                variant="outlined" 
                inputRef={amount}
                />
            </Box>
            <Button variant="contained" onClick={addHandler}>Add Expense</Button>
        </div>
    )
}
