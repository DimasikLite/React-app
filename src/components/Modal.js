import React from "react";

export const Modal = ({ user, hideModal }) => {
  return (
    <div className="modal">
      <div className="info_people">
          <div className="headerModal">
              <div className="title">Информация</div>
            <button className="closeModal" onClick={hideModal}></button>
          </div>
      
        <img className="logo" src={user.picture.large} alt={user.name.first} />
        <span className="name"><b>Имя:&nbsp;</b>
          {user.name.title}&nbsp;{user.name.first}&nbsp;{user.name.last}
        </span>
        <span className="email"><b>Почта:&nbsp;</b>{user.email}</span>
        <span className="address"><b>Адрес:&nbsp;</b>Город:&nbsp;{user.location.city},&nbsp;улица&nbsp;{user.location.street.name},&nbsp;дом&nbsp;{user.location.street.number}</span>
        
      </div>
    </div>
  );
};
