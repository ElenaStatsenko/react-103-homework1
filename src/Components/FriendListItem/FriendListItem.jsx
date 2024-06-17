import clsx from "clsx"
import css from "./FriendListItem.module.css"
export default function FriendListItem({ avatar, name, isOnline }) {
 const status = clsx(css.text, isOnline && css.isActive,
  !isOnline &&css.isInactive
 ) 
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
      <p className ={css.text}>{name}</p>
      <p className ={status}>{isOnline ? "Online" : "Ofline"}</p>
    </div>
   
  );
}
