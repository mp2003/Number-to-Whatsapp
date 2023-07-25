import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const SendText = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="formData">
        <div className="text-center my-4 w-50 m-auto">
          <Typography color={'#23A455'} variant="h6" gutterBottom>
            Send Message with WhatsApp
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Add mobile Number and message for the person you want to send. <br />
            <strong> Ex:- 9859568694</strong> <br />
            <strong> Ex:- Hello, How are you?</strong>
          </Typography>
        </div>

        <div className="container w-75 d-flex flex-column align-items-center">
          <TextField
            className='my-1'
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
          <TextField
            style={{ width: '100%' }}
            className='my-2'
            required
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder="Enter your Message"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <a className="anchor" href={number ? `http://wa.me/+91${number}?text=${text}` : "/#"} target="_self" rel="noopener noreferrer">
          <Button variant="contained" color="success">Send Message</Button>
        </a>
      </div>
    </>
  )
}

export default SendText
