import {List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Box} from '@mui/material';
import { contacts } from '../data/contacts';
import { usersChats } from '../data/usersChats';
import { Link } from 'react-router-dom';

function RecentChats() {
  return (
    <Box>
      <Typography padding="10px" variant='h4'>Messaging App</Typography>
      <Divider/>
      <List sx={{ width: '100%'}}>
        {
          contacts.map(contact => {
            const lastestMessage = 
              usersChats.find(user => user.userId === contact.userId)?.chats.at(-1)?.data || "";
            return (
              <Link to={`/user/${contact.userId}`} key={contact.userId}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={contact.avatarUrl}/>
                  </ListItemAvatar>
                  <ListItemText primary={contact.userName} secondary={lastestMessage} />
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    </Box>
  );
}

export default RecentChats;
