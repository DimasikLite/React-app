import React, { useCallback } from "react";

export const UserItem = ({ user, showModal }) => {
  const showUserData = useCallback(() => {
    showModal(user);
  }, [showModal, user]);

  return (
    <li onClick={showUserData} className="item" key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.first} />
      <div className="title">
        <span className="name">
          {user.name.title}&nbsp;{user.name.first}&nbsp;{user.name.last}
        </span>
        <span className="email">{user.email}</span>
      </div>
      <button>&#8250;</button>
    </li>
  );
};
