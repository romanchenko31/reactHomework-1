import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import style from '../FriendList/FriendList.module.css';
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {    
  return (
    <ul className={style.friendList}>
          {
            friends.map(({ avatar, name, isOnline, id }) => (
               <FriendListItem key={id}  avatar={avatar} name={name} isOnline={isOnline} id={id} />    
            ))
          }
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape)
};

export default FriendList;