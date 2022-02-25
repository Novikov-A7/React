import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { NavLink, Outlet } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { FormMui } from '../Form/FormMui/index.js';
import { ChatComponent } from './ChatComponent.js';


export const ChatList = ({ chats, onAddChat, onDeleteChat }) =>(
  <>
    <List>
      {chats.map((chat) => <ChatComponent chat={chat} onDeleteChat={onDeleteChat} />)}
    </List>
    <FormMui onSubmit={onAddChat}/>
    <Outlet />
  </>

);


  



