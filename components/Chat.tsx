import React, { useState } from 'react';
import { Box, IconButton, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/system';
import { useMediaQuery, Theme } from '@mui/material';
import MobileUserSessionList from './MobileUserSessionList'; 

const ChatContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  maxWidth: '600px',
  padding: theme.spacing(2),
  position: 'relative',
}));

const MessagesContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  marginBottom: '16px',
});

const MobileUserListContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  marginBottom: '16px',
});

const InputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const SignOutIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  right: theme.spacing(3),
}));

interface ChatProps {
  messages: string[];
  onSendMessage: (message: string) => void;
  onSignOut: () => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage, onSignOut }) => {
  const [newMessage, setNewMessage] = useState('');
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <ChatContainer>
      {isMobile && (
        <MobileUserListContainer mt={6}>
          <MobileUserSessionList onSelectSession={(session: string) => {}}/>
        </MobileUserListContainer>
      )}
      <SignOutIconWrapper>
        <IconButton color="primary" onClick={onSignOut}>
          <ExitToAppIcon />
        </IconButton>
      </SignOutIconWrapper>
      <MessagesContainer mt={12}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message} />
            </ListItem>
          ))}
        </List>
      </MessagesContainer>
      <InputContainer>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage} sx={{ marginLeft: '8px', fontSize: '1.5rem' }}>
          <SendIcon fontSize="large" />
        </IconButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
