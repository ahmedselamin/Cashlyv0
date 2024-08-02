import { useState } from "react";
import { toast } from "react-toastify";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

const LandingPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loginOpen, setLoginOpen] = useState(false);

    const [signUpOpen, setSignUpOpen] = useState(false);

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    const handleSignUpOpen = () => {
        setSignUpOpen(true);
    };

    const handleSignUpClose = () => {
        setSignUpOpen(false);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Add login logic here
        console.log("Username:", event.target.username.value);
        console.log("Password:", event.target.password.value);
        handleLoginClose();
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost7001/api/Auth/register", {
                username,
                password,
                confirmPassword,
            });
        }
        catch (err) {
            console.log(err)
        }
        handleSignUpClose();
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* Header */}
            <AppBar position="sticky">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "Georgia, serif",
                            fontSize: "1.8rem",
                        }}
                    >
                        Cashly
                    </Typography>
                    <Button color="inherit" onClick={handleLoginOpen}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Box component="main" sx={{ flex: "1 0 auto" }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        py: 9,
                        textAlign: "center",
                    }}
                >
                    <Container>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Welcome to Cashly
                        </Typography>
                        <Typography variant="h6" component="p" gutterBottom>
                            Effortlessly manage your finances with ease. Track expenses,
                            generate reports, all in a single intuitive platform.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ my: 1 }}
                            onClick={handleSignUpOpen}
                        >
                            Get Started
                        </Button>
                    </Container>
                </Box>

                {/* Features Section */}
                <Container sx={{ py: 8 }}>
                    <Typography variant="h4" component="h2" gutterBottom align="center">
                        Features
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 4, textAlign: "center" }}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Easy Tracking
                                </Typography>
                                <Typography component="p">
                                    Track your income and expenses with a simple, intuitive
                                    interface.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 4, textAlign: "center" }}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Detailed Reports
                                </Typography>
                                <Typography component="p">
                                    Generate detailed financial reports to understand your
                                    spending habits.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 4, textAlign: "center" }}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Secure and Private
                                </Typography>
                                <Typography component="p">
                                    Your data is secure with us. Privacy is our top priority.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    bgcolor: "primary.dark",
                    color: "white",
                    py: 2,
                    textAlign: "center",
                    mt: "auto", // Pushes footer to the bottom
                }}
            >
                <Container>
                    <Typography variant="body1" gutterBottom>
                        &copy; {new Date().getFullYear()} Cashly. All rights reserved.
                    </Typography>
                    <Box>
                        <Button color="inherit" href="#" sx={{ color: "white" }}>
                            Privacy Policy
                        </Button>
                        <Button color="inherit" href="#" sx={{ color: "white" }}>
                            Terms of Service
                        </Button>
                        <Button color="inherit" href="#" sx={{ color: "white" }}>
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Dialog open={loginOpen} onClose={handleLoginClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                        />
                        <DialogActions>
                            <Button onClick={handleLoginClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Login
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
            {/* sign up dialog */}
            <Dialog open={signUpOpen} onClose={handleSignUpClose}>
                <DialogTitle>Join</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSignUpSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <DialogActions>
                            <Button onClick={handleSignUpClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Sign Up
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default LandingPage;