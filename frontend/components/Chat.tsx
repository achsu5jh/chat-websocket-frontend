import React, { useState } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';

const ChatContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  maxWidth: '600px',
  padding: theme.spacing(2),
  position: 'relative', // Ensure position relative for absolute positioning of Avatar
}));

const MessagesContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  marginBottom: '16px',
});

const InputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const AvatarWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  right: theme.spacing(3),
  cursor: 'pointer', // Add cursor pointer for clickable behavior
}));

interface ChatProps {
  messages: string[];
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for anchor element of the menu

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleClickAvatar = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu when clicking on avatar
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
    handleCloseMenu(); // Close menu after logout action
  };

  return (
    <ChatContainer>
      {/* <Typography variant="h5" gutterBottom>
        Chat
      </Typography> */}
      <AvatarWrapper onClick={handleClickAvatar}>
        <Avatar alt="Profile" src="/path_to_your_profile_image.jpg" />
      </AvatarWrapper>
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
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </ChatContainer>
  );
};

export default Chat;
