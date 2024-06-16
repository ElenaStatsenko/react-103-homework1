import css from "./Profile.module.css"
export default function Profile({ userName: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },}) {
    return(
        <div className= {css.table}>
  <div >
    <img className={css.profileImg}
      src={avatar}
      alt="User avatar"
    />
    <p className ={css.profileAvatar}>{username}</p>
    <p className ={css.profileTag}>{tag}</p>
    <p className ={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.profileUl}>
    <li className={css.profileLi}>
      <span className ={css.profileTableName}>Followers</span>
      <span className ={css.profileTableQuantity}>{followers}</span>
    </li>
    <li className={css.profileLi}>
      <span className ={css.profileTableName}>Views</span>
      <span className ={css.profileTableQuantity}>{views}</span>
    </li>
    <li className={css.profileLi}>
      <span className ={css.profileTableName}>Likes</span>
      <span className ={css.profileTableQuantity}>{likes}</span>
    </li>
  </ul>
</div>
    );
}