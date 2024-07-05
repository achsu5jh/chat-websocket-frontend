import React, { useState } from 'react';
import { List, ListItem, ListItemText, Paper, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';

const UserSessionContainer = styled(Paper)(({ theme }) => ({
  height: '80vh',
  padding: theme.spacing(2),
  overflowY: 'auto',
}));

const ListContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  marginBottom: '16px',
});

const sessions = [
  'Server 1',
  'Server 2',
  'Server 3',
  'Server 4',
  'Server 5',
];

interface UserSessionListProps {
  onSelectSession: (session: string) => void;
}

const UserSessionList: React.FC<UserSessionListProps> = ({ onSelectSession }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSessions, setFilteredSessions] = useState<string[]>(sessions);

  // Function to filter sessions based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = sessions.filter(session =>
      session.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSessions(filtered);
  };

  return (
    <UserSessionContainer>
      <TextField
        label="Search Sessions"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <ListContainer>
        <List>
          {filteredSessions.map((session, index) => (
            <ListItem button key={index} onClick={() => onSelectSession(session)}>
              <ListItemText primary={session} />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </UserSessionContainer>
  );
};

export default UserSessionList;
