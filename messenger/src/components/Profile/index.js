import { useContext, useEffect } from "react"
import { ThemeContext } from "../../utils/ThemeContext.js"
import { useDispatch, useSelector } from "react-redux"
import { chengeCheckBox } from "../../store/profile/actions.js";

export const Profile = () => {
  const { setMessageColor } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.checked);
  const hendleChecked = () =>{
    dispatch(chengeCheckBox)
  };
  const chengeTheme = () => {
   setMessageColor(data === true ? "yellow" : "white" )
  };
  useEffect(() => {
    chengeTheme()
  }, [data]);
  return(
    <>
      <h2>My Profile</h2>
      <input checked={data}  onChange={hendleChecked} type={"checkbox"}/>
      <label >Изменить Тему</label>
    </>
  )
}