import React,{useRef} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Budget() {
    const budget = useRef()

    const addBudget=()=>{
        localStorage.setItem('budget',budget.current.value)
        window.location.reload(true)
    }

    return (
        <div className="budget">
           <div>Please Enter Your Budget</div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField 
                id="outlined-basic" 
                label="Amount" 
                variant="outlined" 
                inputRef={budget}
                />
            </Box>
            <Button variant="contained" onClick={addBudget}>Calculate</Button>
        </div>
    )
}
