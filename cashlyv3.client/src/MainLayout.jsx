import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    CssBaseline,
    useTheme,
    useMediaQuery,
    Box,
    Avatar,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "./Components/Sidebar";

const drawerWidth = 240;

const MainLayout = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setCookies("access_token", "");

        window.localStorage.removeItem("userID");
        navigate("/");
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        Cashly
                    </Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={handleMenuOpen}
                            sx={{ ml: 2 }}
                        >
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Sidebar
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                isMobile={isMobile}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;