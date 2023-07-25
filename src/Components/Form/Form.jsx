import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Form.css';
import { useState } from 'react';


export default function Form() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div className="formData">
                <div className="text-center my-4 w-50 m-auto">
                    <Typography color={'#23A455'} variant="h6" gutterBottom>
                        Your WhatsApp Number
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Add mobile Number of the person you want to send message. <br />
                        <strong> Ex:- 7359568694</strong>
                    </Typography>
                </div>

                <TextField
                    style={{ marginBottom: 20 }}
                    required
                    id="outlined-number"
                    label="Phone Number"
                    type="number"
                    placeholder="Enter phone Number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}

                />
                <a className="anchor" href={number ? `http://wa.me/+91${number}` : "/#"} target="_self" rel="noopener noreferrer">
                    <Button variant="contained" color="success">Send Message</Button>
                </a>
            </div>

        </>
    );
}