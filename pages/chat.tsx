import { useState } from 'react';
import { Grid, Container, Box, CssBaseline, useMediaQuery, Theme, Hidden } from '@mui/material';
import Chat from '../components/Chat';
import UserSessionList from '../components/UserSessionList';
import MobileUserSessionList from "../components/MobileUserSessionList";

const ChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string>('Server 1');
  const [messages, setMessages] = useState<{ [key: string]: string[] }>({
    'Server 1': ['Hello from Server 1'],
    'Server 2': ['Hello from Server 2'],
    'Server 3': ['Hello from Server 3'],
    'Server 4': ['Hello from Server 4'],
    'Server 5': ['Hello from Server 5'],
    'Server 6': ['Hello from Server 6'],
    'Server 7': ['Hello from Server 7'],
    'Server 8': ['Hello from Server 8'],
    'Server 9': ['Hello from Server 9'],
    'Server 10': ['Hello from Server 10'],
    'Server 11': ['Hello from Server 11'],
    'Server 12': ['Hello from Server 12'],
    'Server 13': ['Hello from Server 13'],
    'Server 14': ['Hello from Server 14'],
    'Server 15': ['Hello from Server 15'],
    'Server 16': ['Hello from Server 16'],
    'Server 17': ['Hello from Server 17'],
  });

  const handleSelectSession = (session: string) => {
    setSelectedUser(session);
  };

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedUser]: [...prevMessages[selectedUser], message],
    }));
  };

  // Use MUI useMediaQuery hook to check for mobile devices
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Conditional rendering based on screen size */}
          {!isMobile && (
            <Grid item xs={12} md={4}>
              <UserSessionList onSelectSession={handleSelectSession} />
            </Grid>
          )}
          <Grid item xs={12} md={!isMobile ? 8 : 12}>
            <Chat
              messages={messages[selectedUser]}
              onSendMessage={handleSendMessage}
              onSignOut={() => {
                console.log('Sign out logic here');
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChatPage;
