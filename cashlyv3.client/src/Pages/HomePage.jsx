import { Container, Typography, Paper } from "@mui/material";

const HomePage = () => {
    return (
        <Container sx={{ mx: 1 }}>
            <Typography variant="h1">Home</Typography>
            <Paper elevation={3}>
                <Typography variant="h3">Service</Typography>
            </Paper>
        </Container>
    );
};

export default HomePage;