import './style.css';

export const Message = ({text, post}) => {
  return (<h3 className ="header">First user <p className="header__text">{text} - {post}</p></h3>);
};
