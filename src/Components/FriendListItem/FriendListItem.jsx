
import css from "./FriendListItem.module.css"
export default function FriendListItem({ avatar, name, isOnline }) {
 console.log(isOnline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{"isOnline"}</p>
    </div>
   
  );
}
