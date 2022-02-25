import { useCallback } from "react";

export const DeleteButton = ({id, onClick}) => {
  const deleteClick = useCallback(() => {
    onClick(id);
  }, [onClick, id]);
  return <button onClick={deleteClick}>x</button>;
}