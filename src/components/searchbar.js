import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function SearchBar() {
    return(
        <Box sx={{width: 500, maxWidth: '100%',}}>
            <TextField fullWidth label="search"></TextField>
        </Box>
    );
}