import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Router  from 'next/router';

export default function Header() {

    const VisitHome=()=>{

        Router.push("/")
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"#011E3C"}} position="static">

          <Container>


          <Toolbar>
          
          <Typography onClick={VisitHome} variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:{lg:'30px',md:"20px",sm:'20px',xs:'20px',xl:"30px"},fontWeight:"600",cursor:"pointer"}}>
            Image Gallery
          </Typography>
          <Button variant='contained' color="primary">Login</Button>
        </Toolbar>


          </Container>
       
      </AppBar>
    </Box>
  );
}
