import { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "@closeio/use-infinite-scroll";

const getApiUrl = (page) =>
    `https://randomuser.me/api/?results=10&page=${page}`;

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });
    useEffect(
        function loadMore() {
            (async() => {
                const realPage = page + 1;
                const items = await axios.get(getApiUrl(realPage));
                setHasMore(true);
                setUsers((prevUsers) => [...prevUsers, ...items.data.results]);
            })();
        }, [page]
    );

    const refreshUsers = async() => {
        const items = await axios.get(getApiUrl(1));
        setUsers(items.data.results);
    };

    return {
        data: {
            users,
            loaderRef,
            scrollerRef,
            hasMore
        },
        methods: {
            refreshUsers
        }
    };
};

const useModalData = (users) => {
    const [user, saveUser] = useState(null);
    const isModalShowed = Boolean(user);

    const showModal = (user) => {
        saveUser(user);
    };

    const hideModal = () => {
        saveUser(null);
    };

    const showModalWithRandomUser = () => {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        showModal(randomUser);
    };

    return {
        data: {
            user,
            isModalShowed
        },
        methods: {
            showModal,
            hideModal,
            showModalWithRandomUser
        }
    };
};

export const AppService = {
    useModalData,
    useUsers
};