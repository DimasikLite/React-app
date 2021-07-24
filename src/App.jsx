import "./App.css";
import React from "react";
import { UserItem } from "./components/UserItem";
import { Modal } from "./components/Modal";
import { AppService } from "./AppService";

export const App = () => {
  const {
    data: { users, loaderRef, scrollerRef, hasMore },
    methods: { refreshUsers }
  } = AppService.useUsers();

  const {
    data: { isModalShowed, user },
    methods: { showModal, hideModal, showModalWithRandomUser }
  } = AppService.useModalData(users);

  return (
    <div className="list-people">
      <div className="header">
        <button className="random" onClick={showModalWithRandomUser}>
        </button>
        {isModalShowed && <Modal user={user} hideModal={hideModal} />}

        <div className="title">Пользователи</div>
        <button className="reset" onClick={refreshUsers}>
        </button>
      </div>
      <ul className="list" ref={scrollerRef}>
        {users.map((item) => (
          <UserItem key={item.login.uuid} user={item} showModal={showModal} />
        ))}
        {hasMore && <div ref={loaderRef}><h5>Загрузка...</h5></div>}
      </ul>
      <span></span>
    </div>
  );
};

export default App;
