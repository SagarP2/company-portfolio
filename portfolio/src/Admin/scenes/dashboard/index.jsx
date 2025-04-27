//Admin Dashboard Main File
import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box margin="0.5rem 1rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        
      </Box>
      {/* Progress bars */}
      
    </Box>
  );
}

export default Dashboard;
