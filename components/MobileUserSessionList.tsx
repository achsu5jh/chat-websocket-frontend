import React, { useState } from 'react';
import { List, ListItem, ListItemText, Paper, Box, TextField, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MobileUserSessionContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: '16px',
}));

const ListContainer = styled(Box)({
  overflowY: 'auto',
  maxHeight: '300px', // Adjust height based on design needs
});

const sessions = [
  'Server 1',
  'Server 2',
  'Server 3',
  'Server 4',
  'Server 5',
  'Server 6',
  'Server 7',
  'Server 8',
  'Server 9',
  'Server 10',
  'Server 11',
  'Server 12',
  'Server 13',
  'Server 14',
  'Server 15',
  'Server 16',
  'Server 17',
];

interface MobileUserSessionListProps {
  onSelectSession: (session: string) => void;
}

const MobileUserSessionList: React.FC<MobileUserSessionListProps> = ({ onSelectSession }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllSessions, setShowAllSessions] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSession, setSelectedSession] = useState<string>('Server 1'); // Initially select 'Server 1'

  const [filteredSessions, setFilteredSessions] = useState<string[]>(sessions);

  // Function to filter sessions based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = sessions.filter(session =>
      session.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSessions(filtered);
  };

  // Toggle showing all sessions
  const toggleShowAllSessions = () => {
    setShowAllSessions(prev => !prev);
  };

  // Menu open and close handlers
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Handle selecting a session from the menu
  const handleSelectSession = (session: string) => {
    setSelectedSession(session); // Set selected session
    onSelectSession(session); // Trigger onSelectSession callback
    handleCloseMenu(); // Close the menu
  };

  return (
    <MobileUserSessionContainer>
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
          <ListItem>
            <ListItemText primary={selectedSession} />
            <IconButton onClick={handleOpenMenu}>
              <ExpandMoreIcon />
            </IconButton>
          </ListItem>
        </List>
        {/* Menu to display all sessions */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {filteredSessions.map((session, index) => (
            <MenuItem key={index} onClick={() => handleSelectSession(session)}>
              {session}
            </MenuItem>
          ))}
        </Menu>
      </ListContainer>
    </MobileUserSessionContainer>
  );
};

export default MobileUserSessionList;
 