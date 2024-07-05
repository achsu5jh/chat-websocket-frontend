import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FullHeightContainer = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up:', { email, password, confirmPassword });
    router.push('/dashboard');
  };

  return (
    <FullHeightContainer>
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Signup
                </Typography>
                <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                variant="contained"
                color="primary"
                onClick={handleSignup}
                fullWidth
                sx={{ mt: 2 }}
                >
                Signup
                </Button>
            </Box>
            </Container>
    </FullHeightContainer>
    
  );
};

export default Signup;
