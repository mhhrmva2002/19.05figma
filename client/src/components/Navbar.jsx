import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" marginLeft="10%"component="div" sx={{ flexGrow: 1 }}>
             Bandname
            </Typography>
            <div style={{marginRight:"45%"}}>
            <Button  variant="" >Home</Button>
            <Button  variant="" >Product</Button>
            <Button variant="" >Pricing</Button>
            <Button variant="" >Contact</Button>
            </div>
            <Button variant="" >Login</Button>
            <Button variant="" style={{ backgraundColor:"red" , border:"3px solid "}}>Join us</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;