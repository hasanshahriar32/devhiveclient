import React, { useEffect, useState } from "react";
import LeftNavBanner from "./LeftNavBanner";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../../../features/chat/chatSlice";
import DrawerBanner from "../../../Components/Header/HeaderComponents/DrawerBanner";
import { getSenderName, getSenderPic } from "../../../Configs/chatLogics";
import LoadingAnimation from "../../../Components/LoadingAnimation";
const LeftChatNav = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const thisUserData = useSelector((state) => state.login.userData);
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const selectedUser = (user) => {
    // console.log(id);
    setSelectedId(user);
  };
  const closeBtn = () => {
    setSearch();
    setUsers([]);
    selectedUser();
  };
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/user/user?search=${search}`,

          config
        );
        setUsers(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  // console.log(users);
  const addUserForChat = async (userId) => {
    const userData = localStorage.getItem("user_id");
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const { data } = await axios.post(
        `https://devhiveserver.vercel.app/chat/${userData}`,
        { userId },
        config
      );
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      console.log(chats);
      dispatch(setSelectedChat(data));

      setLoadingChat(false);
      // setSearchResultOpen(!searchResultOpen);
      closeBtn();
      console.log(data);
      setSearch("");
    } catch (error) {
      console.log(error);
      setLoadingChat(false);
    }
  };
  const fetchChats = async () => {
    const userData = localStorage.getItem("user_id");

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };

      const { data } = await axios.get(
        `https://devhiveserver.vercel.app/chat/${userData}`,
        config
      );
      setChats(data);
      setLoading(false);
      // console.log(data);
      // console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error.message || "error fetching chat");
    }
  };

  console.log("selected chat: ", selectedChat);
  useEffect(() => {
    fetchChats();
  }, []);
  console.log(chats);
  return (
    <div>
      <div class="flex  flex-col py-8 pl-6 pr-2 w-full h-screen bg-white ">
        <div class="flex flex-row items-center justify-center  w-full">
          <button
            onClick={() => navigate(from, { replace: true })}
            className="btn absolute left-6 btn-outline btn-sm btn-circle"
          >
            <IoMdArrowRoundBack className="text-xl"></IoMdArrowRoundBack>
          </button>
          <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">DevHiveChat</div>
        </div>
        {/* <LeftNavBanner></LeftNavBanner> */}
        <div className="border rounded-lg px-3 pb-2 mt-2">
          <DrawerBanner></DrawerBanner>
        </div>
        <div class="flex flex-col mt-2">
          <div class="flex flex-row items-center justify-between text-xs mt-2">
            <span class="font-bold">Search User</span>
            <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              {users?.length}
            </span>
          </div>
          {!selectedId && (
            <div class="flex flex-col space-y-1 mt-4 mx-2">
              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
              >
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
          )}
          <div class="w-full  flex flex-col space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            {selectedId && (
              <div className="flex gap-2 mt-4 flex-row items-center w-full justify-evenly">
                <button
                  onClick={() => addUserForChat(selectedId?._id)}
                  type="button "
                  class="flex items-center border justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <BsFillChatDotsFill className="mr-2"></BsFillChatDotsFill>
                  Chat with {selectedId.name}
                </button>
                <button
                  onClick={closeBtn}
                  className="btn btn-error btn-sm btn-outline "
                >
                  <FaWindowClose className="text-2xl"></FaWindowClose>
                </button>
              </div>
            )}
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-6" className="btn">
                  open modal
                </label> */}
          </div>
          {search && !selectedId && (
            <div className="relative top-6">
              <ul className="absolute menu p-2 shadow bg-base-100 rounded-box w-full">
                {users.map((user) => (
                  <li className="flex flex-row overflow-clip" key={user?._id}>
                    <a
                      className="w-full"
                      onClick={() => {
                        selectedUser(user);
                      }}
                    >
                      {" "}
                      <img src={user?.pic} className="w-6" alt="" />{" "}
                      {user?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div class="flex flex-row items-center justify-between mt-6 text-xs">
            <span class="font-bold">Active Conversations</span>
            <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              {chats?.length || 0}
            </span>
          </div>
          <div class="flex HeaderDrawer flex-col space-y-1 mt-4 -mx-2 h-36 overflow-y-auto">
            {chats.length === 0 ? (
              <LoadingAnimation className="w-full"></LoadingAnimation>
            ) : (
              chats?.map((chat) => (
                <button
                  onClick={() => dispatch(setSelectedChat(chat))}
                  className={
                    selectedChat?._id == chat?._id
                      ? "flex hover:bg-base-200 bg-base-300 flex-row items-center rounded-xl p-2 shadow-md"
                      : "flex hover:bg-base-200 flex-row items-center rounded-xl p-2 shadow-md"
                  }
                >
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    <img
                      src={getSenderPic(
                        localStorage.getItem("user_id"),
                        chat?.users
                      ) || 'https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png'
}
                      alt=""
                    />
                  </div>
                  <div class="ml-2 text-sm font-semibold">
                    {/* {chat.users[1].name} */}
                    {getSenderName(
                      localStorage.getItem("user_id"),
                      chat?.users
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftChatNav;
