import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

const myChats = [
  {id:"1", name: "Chat1"}, 
  {id:"2", name: "Chat2"}
];
export const ChatList = () =>(
  <List>
    {myChats.map((chat)=> (
      <ListItem key={chat.id}>{chat.name}</ListItem>
    ))}
  </List>
);


  



