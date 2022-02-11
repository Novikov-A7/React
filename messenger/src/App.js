//import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
//import {Form} from './components/Form';
import { AUTHORS } from "./utils/constants.js";
import { useEffect } from "react";  
import { MessageList } from './components/MessageList/index.js';
import { FormMui } from './components/Form/FormMui/index.js';
import { ChatList } from './components/ChatsList/index.js';


function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();
  

  const handleAddMessage = (text) => {
    sendMessage (text, AUTHORS.ME)
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeBreak;
    if(messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeBreak = setTimeout(() => {
        sendMessage("I'll be back soon", AUTHORS.BOT)
      }, 1000)
    };
    return () => clearTimeout(timeBreak);
  }, [messageList]);

  return(
      <div className="App">
              
        <div className="App-content">
          <div className='wrapper'>
            <div className='myChatList'>
              <ChatList/>
            </div>
            <div className='chatWindow'>
              <MessageList  messages={messageList} />
              <div ref={messagesEnd}></div>
              <FormMui onSubmit={handleAddMessage}/>
            </div>  
          </div>
        </div>
      </div>
  )
};

export default App;

