import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#25D366' }}>
                <Toolbar style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <WhatsAppIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}