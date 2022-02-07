//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {Form} from './components/Form';
import { AUTHORS } from "./utils/constants.js";
import { useEffect } from "react";
import { MessageList } from './components/MessageList/index.js';



function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (text) => {
    sendMessage (text, AUTHORS.ME)
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    let timeBreak;
    if(messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeBreak = setTimeout(() => {
        sendMessage("I'll be back soon", AUTHORS.BOT)
      }, 1000)
    };
    return () => {clearTimeout(timeBreak)};
  }, [messageList]);

  return(
    <>
      <h2>FRAGMENT</h2>
      <div className="App">

        <header className="App-header">
          <MessageList messages={messageList} />


          <Form onSubmit={handleAddMessage}/>

        </header>
      </div>
    </>
    
  )
};

export default App;

