import './style.css';

export const Message = ({text, author}) => {
  return (<p className ="header">{author} : <span className="header__text">{text}</span></p>);
};
