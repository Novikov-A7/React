import { Message } from "../Message/index.js";

export const MessageList = ({messages}) => 
  messages.map((message) => ( 
    <Message 
      text = {message.text}
      author = {message.author}
    />
  ));
