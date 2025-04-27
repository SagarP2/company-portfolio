import React from "react";
import { Sidebar as MySidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(title);
        if (onClick) onClick();
      }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};



function Sidebar({ onLogout, setSelectedPage }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="sidebar">
      <Box>
        <MySidebar>
          <Menu>
            {/* Menu Items */}
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={() => setSelectedPage("dashboard")}
            />
            <Item
              title="New Project"
              icon={<AddBoxIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={() => setSelectedPage("New Project")} // Display form
            />
            <Item
              title="Sub Project"
              icon={<AddPhotoAlternateIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={() => setSelectedPage("Subproject")}
            />
            <Item
              title="Log Out"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={onLogout}
            />
          </Menu>
        </MySidebar>
      </Box>
    </div>
  );
}

export default Sidebar;
