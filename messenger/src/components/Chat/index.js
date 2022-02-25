import React from "react";
import { useRef, useState, useEffect } from "react";
import { AUTHORS } from "../../utils/constants.js";
import { MessageList } from '../MessageList';
import { FormMui } from '../Form/FormMui';
import { ChatList } from '../ChatsList';
import { Navigate, useParams } from "react-router-dom";



export function Chat ({messages, addMessage}) {
  const params = useParams();
  const { chatId } = params;
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
    addMessage(chatId, newMsg);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeBreak;
    if(
      messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.ME
    ) {
      timeBreak = setTimeout(() => {
        sendMessage("I'll be back soon", AUTHORS.BOT)
      }, 1000)
    };
    return () => clearTimeout(timeBreak);
  }, [messages]);

 if(!messages[chatId]) {
   return ( <Navigate to={"/chats"} replace/>)
 }

  return(
    <div className="App">
            
      <div className="App-content">
        <div className='wrapper'>
          <div className='chatWindow'>
            <MessageList  messages={messages[chatId]} />
            <div ref={messagesEnd}></div>
            <FormMui onSubmit={handleAddMessage}/>
          </div>  
        </div>
      </div>
    </div>
)
};