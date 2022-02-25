import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chat } from "../Chat";
import '../../App.css'
import { ChatList } from "../ChatsList/index.js";
import { Profile } from "../Profile/index.js";
import { useState } from "react";

const Home = () => <h2>Home Page</h2>;
const initChats = [
  {id:"Chat1", name: "Chat 1"}, 
  {id:"Chat2", name: "Chat 2"},
  {id:"Chat3", name: "Chat 3"},
];
const initMessages = initChats.reduce((acc, el) =>{
  acc[el.id] = [];
  return acc;
}, {});
export const Router = () => {
  const [chatList, setChatList] = useState(initChats);
  const [messages, setMessages] = useState(initMessages);

  const handleAddMessage = (chatId, newMsg) => {
    setMessages((prevMessageList) =>({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg]
    }));
  };

  const hendleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;

    const newChat = {
      id: newId,
      name: newChatName,
    };

    setChatList(prevChatList => [...prevChatList, newChat]);
    setMessages((prevMessages) =>({
      ...prevMessages,
      [newId]: [],
    }));
  };

  const hendleDeleteChat = (idToDelete) => {
    setChatList (prevChatList => prevChatList.filter(chat => chat.id !== idToDelete));
    setMessages((prevMessages) =>{
      const newMesg = {...prevMessages};

      delete newMesg[idToDelete];

      return newMesg
    } )
  };
  return (
    <BrowserRouter>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/profile">profile</Link>
      </div>
      <div>
        <Link to="/chats">chats</Link>
      </div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="profile" element={ <Profile /> } />
        <Route path="chats" element={ <ChatList onDeleteChat={hendleDeleteChat} onAddChat={hendleAddChat} chats={chatList} /> }>
        <Route path=":chatId" element={ <Chat messages={messages} addMessage={handleAddMessage}/> } />
        </Route>
      </Routes>      
    </BrowserRouter>
  );
};