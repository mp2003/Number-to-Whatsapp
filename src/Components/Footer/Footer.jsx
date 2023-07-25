import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { Link } from 'react-router-dom'

export default function Footer() {

    const [value, setValue] = React.useState('dialpad');


    const handleChange = (event, newValue) => {
        setValue(newValue);
        // console.log(newValue);
    };

    return (
        <BottomNavigation
            style={{ justifyContent: "space-around", position: "fixed", bottom: 0, marginBottom: "0.5rem", }}
            sx={{ width: '100%' }}
            value={value}
            onChange={handleChange}>

            <BottomNavigationAction
                style={{ color: 'rgb(1 128 49)' }}
                component={Link}
                to="/"
                label="Dialpad"
                value="dialpad"
                showlabels='false'
                icon={<DialpadIcon />}
            />

            <BottomNavigationAction
                style={{ color: 'rgb(1 128 49)' }}
                component={Link}
                to="/sendtext"
                label="Send Message"
                value="message"
                showlabels='false'
                icon={<MessageIcon />}
            />
            <BottomNavigationAction
                style={{ color: 'rgb(1 128 49)' }}
                component={Link}
                to="/about"
                label="Owner"
                value="about"
                showlabels='false'
                icon={<AccountCircleIcon />} />

        </BottomNavigation>

    );
}