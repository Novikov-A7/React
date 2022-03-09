import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext.js';
import './style.css';

export const Message = ({text, author}) => {
  const{messageColor} = useContext(ThemeContext)
  
  return (<p className ="header">{author} : <span style={{color: messageColor}} className="header__text">{text}</span></p>);
};
