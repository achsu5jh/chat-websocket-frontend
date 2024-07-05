import { useState } from 'react';
import { Grid, Container, Box, CssBaseline } from '@mui/material';
import Chat from '../components/Chat';
import UserSessionList from '../components/UserSessionList';

const ChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string>('Server 1');
  const [messages, setMessages] = useState<{ [key: string]: string[] }>({
    'Server 1': ['Hello from Server 1'],
    'Server 2': ['Hello from Server 2'],
    'Server 3': ['Hello from Server 3'],
    'Server 4': ['Hello from Server 4'],
    'Server 5': ['Hello from Server 5'],
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
          <Grid item xs={12} md={4}>
            <UserSessionList onSelectSession={handleSelectSession} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Chat messages={messages[selectedUser]} onSendMessage={handleSendMessage} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChatPage;
