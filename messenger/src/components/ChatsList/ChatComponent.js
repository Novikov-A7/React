import { ListItem } from "@mui/material"
import { NavLink } from "react-router-dom"
import { DeleteButton } from "./DeleteButton.js"

export const ChatComponent = ({chat, onDeleteChat}) =>(
  <ListItem key={chat.id}>
    <NavLink to={`/chats/${chat.id}`} style={({isActive}) => ({color: isActive ? 'red' : 'green'})} >{chat.name}</NavLink>
    < DeleteButton id = {chat.id} onClick={onDeleteChat} />
  </ListItem>
);