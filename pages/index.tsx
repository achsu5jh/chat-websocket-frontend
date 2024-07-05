import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Container, Box, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const FullHeightContainer = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const SignupLinkContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '8px', // Adjust as needed for spacing
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in:', { email, password });
    router.push('/chat');
  };

  return (
    <FullHeightContainer>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Login
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
        <SignupLinkContainer mt={2}>
          <Link href="/signup" passHref>
            <Typography variant="body2" color="secondary" component="span">
              Sign up
            </Typography>
          </Link>
        </SignupLinkContainer>
      </Container>
    </FullHeightContainer>
  );
};

export default Login;
