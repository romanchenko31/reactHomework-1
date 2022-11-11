import PropTypes from 'prop-types';
import style from '../FriendListItem/FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
      <li key={id} className={style.item}>
      {
        isOnline 
          ? (<span className={style.isOn}></span>) 
          : (<span className={style.isOff}></span>)
      }
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default FriendListItem;