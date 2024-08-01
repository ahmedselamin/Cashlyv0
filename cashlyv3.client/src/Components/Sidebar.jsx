import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    MenuItem,
    Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReportIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
    });

    const handleClickOpen = () => {
        setOpen(true);
        if (isMobile) {
            handleDrawerToggle();
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data:", formData);
        handleClose();
    };

    const drawer = (
        <div>
            <Toolbar />
            <List sx={{ mt: 7 }}>
                <ListItem
                    button
                    component={Link}
                    to="/home"
                    onClick={isMobile ? handleDrawerToggle : null}
                    sx={{ my: 3, height: "60px" }} // Adjust height if needed
                >
                    <ListItemIcon sx={{ minWidth: "40px", color: "black" }}>
                        <HomeIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Home"
                        primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
                    />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/reports"
                    onClick={isMobile ? handleDrawerToggle : null}
                    sx={{ my: 3, height: "60px" }} // Adjust height if needed
                >
                    <ListItemIcon
                        sx={{ minWidth: "40px", color: "black" }} // Adjust icon container width if needed
                    >
                        <ReportIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Reports"
                        primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
                    />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/settings"
                    onClick={isMobile ? handleDrawerToggle : null}
                    sx={{ height: "60px" }} // Adjust height if needed
                >
                    <ListItemIcon
                        sx={{ minWidth: "40px", color: "black" }} // Adjust icon container width if needed
                    >
                        <SettingsIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Settings"
                        primaryTypographyProps={{ fontSize: "1.2rem" }} // Increase text size
                    />
                </ListItem>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpen}
                    sx={{ mx: 2, mt: "4rem", p: "12px", fontWeight: 550 }}
                >
                    new Transaction
                </Button>
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>New Transaction</DialogTitle>
                <DialogContent sx={{ padding: 3 }}>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mt: 2,
                        }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            margin="dense"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            name="amount"
                            label="Amount"
                            type="number"
                            fullWidth
                            variant="outlined"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            name="date"
                            label="Date"
                            type="date"
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            name="category"
                            label="Category"
                            select
                            fullWidth
                            variant="outlined"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="expense">Expense</MenuItem>
                            <MenuItem value="income">Income</MenuItem>
                        </TextField>
                        <DialogActions>
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                            /*onClick={handleClose} */
                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Sidebar;