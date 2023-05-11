import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.module.css";
import HeaderDrawer from "./HeaderComponents/HeaderDrawer";
import DrawerBanner from "./HeaderComponents/DrawerBanner";
import { themeChange } from "theme-change";
import { useSelector } from "react-redux";
import { AiOutlineLogin } from "react-icons/ai";
import CategoriesHeader from "./HeaderComponents/CategoriesHeader";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import { MdSell } from "react-icons/md";
import useChat from "../../hooks/useChat";
import useAdmin from "../../hooks/useAdmin";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
const Header = () => {
  const [drawer, setDrawer] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [service, setService] = useState([]);
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  // console.log(userData);
  const startChat = useChat("6442a7391d9c6ad6b75ea1b3");
  const handleAdminChat = () => {
    startChat();
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSearch("");
    setIsModalOpen(false);
  };
  const handleSerarch = () => {
    navigate("/serviceQuery/single", {
      state: { data: service },
    });
    setSearch("");
    setIsModalOpen(false);
  };
  const [developerStatus, setDeveloperStatus] = useState(false);
  useEffect(() => {
    fetch(
      `https://devhiveserver.vercel.app/developer/singledeveloper/${localStorage.getItem(
        "user_id"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setDeveloperStatus(true);
        }
      });
  }, [isLoggedIn, userData]);
  const [admin] = useAdmin();
  const handleQuery = (e) => {
    e.preventDefault();
  };
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search == "") {
      return;
    }
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/service/slug?search=${search}`,

          config
        );
        setService(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  // console.log(service);
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav class="bg-base-300 print:hidden lg:bg-base-100 lg:border-b border-gray-200 px-4 lg:px-6 w-[100%] py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
              {drawer && <HeaderDrawer></HeaderDrawer>}
              {drawer && (
                <button
                  onClick={() => setDrawer(false)}
                  className="fixed z-50 btn btn-lg p-4 btn-circle btn-error btn-outline lg:hidden top-20 right-5 "
                >
                  <img
                    className="w-[800px]"
                    src="https://cdn-icons-png.flaticon.com/512/1243/1243911.png?w=740&t=st=1680274314~exp=1680274914~hmac=ed5d0844f7d089ca8499a94fde6f979885ce9710e81c4871c16d66005a8c37c5"
                    title="close drawer"
                    alt="close drawer"
                  />
                </button>
              )}
              <button
                onClick={() => setDrawer(true)}
                class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <svg
                  aria-hidden="true"
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Toggle sidebar</span>
              </button>
              <Link to="/" class="  mr-1">
                <img
                  src="https://i.ibb.co/FHqDjdX/IMG-20230404-110630-fotor-bg-remover-20230404111148.png"
                  class="  h-12  bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                  alt="devhive Logo"
                />
              </Link>
              <form
                action="#"
                onSubmit={handleQuery}
                method="GET"
                class="hidden lg:block lg:ml-2"
              >
                <label for="topbar-search" class="sr-only ">
                  Search
                </label>
                <div class="relative mt-1 lg:w-[450px] flex">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {search != "" && (
                    <button
                      onClick={() => {
                        setSearch("");
                      }}
                      class="flex btn btn-circle btn-ghost btn-outline btn-xs absolute right-2 top-2"
                    >
                      <AiOutlineClose />
                    </button>
                  )}
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    value={search}
                    id="topbar-search"
                    class="bg-transparent border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search Gists"
                  />
                </div>
                {search && (
                  <div className="relative z-10 top-6">
                    <ul className="absolute menu p-2 shadow bg-base-100 rounded-box w-[450px]">
                      {service.map((single) => (
                        <li
                          className="flex flex-row overflow-clip"
                          key={single?._id}
                        >
                          <Link
                            to={`services/slug/${single?._id}`}
                            className="w-full"
                            onClick={() => {
                              setSearch("");
                            }}
                          >
                            {" "}
                            <img
                              src={single?.serviceImage?.img1}
                              className="w-6"
                              alt=""
                            />{" "}
                            {single?.slugTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>

            {/* 2nd section */}
            <div class="flex items-center lg:order-2">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                onClick={handleOpenModal}
                class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Search</span>
                {/* <!-- Search icon --> */}
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <>
                <div className="flex items-center justify-center"></div>

                {isModalOpen && (
                  <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div className="fixed inset-0 transition-opacity">
                        <div className="absolute z-40 inset-0 bg-base-200 opacity-75"></div>
                      </div>
                      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                      &#8203;
                      <div className="inline-block align-bottom bg-base-300 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-base-content">
                              Search
                            </h3>
                            <div className="mt-2">
                              <form onSubmit={handleQuery}>
                                <input
                                  onChange={(e) => setSearch(e.target.value)}
                                  value={search}
                                  type="text"
                                  placeholder="Search"
                                  className="border-gray-200 bg-transparent border-2 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <div className="mt-4">
                                  <button
                                    onClick={handleSerarch}
                                    className="bg-blue-500 btn btn-outline text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                  >
                                    Search
                                  </button>
                                  <button
                                    type="button"
                                    className="ml-4 bg-gray-200 btn btn-outline text-gray-600 rounded-lg px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    onClick={handleCloseModal}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>

              <NavLink className="hidden lg:block" to="/">
                <button
                  type="button"
                  data-dropdown-toggle="apps-dropdown"
                  class="flex flex-row gap-1 p-2 items-center  ml-0 sm:ml-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                >
                  {/* <!-- Icon -->  */}
                  {/* <FaHome className="text-2xl"></FaHome> */}
                  <span className="font-semibold hidden antialiased sm:block mt-1">
                    Home
                  </span>
                </button>
              </NavLink>
              <NavLink className="hidden lg:block" to="/services">
                <button
                  type="button"
                  data-dropdown-toggle="apps-dropdown"
                  class="flex flex-row gap-1 p-2 items-center  ml-0 sm:ml-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                >
                  {/* <!-- Icon --> 
                  <FaHome className="text-2xl"></FaHome>*/}
                  <span className="font-semibold hidden antialiased sm:block mt-1">
                    Services
                  </span>
                </button>
              </NavLink>
              {developerStatus == false && (
                <NavLink className="hidden lg:block" to="/start_selling">
                  <button
                    type="button"
                    data-dropdown-toggle="apps-dropdown"
                    class="flex flex-row gap-1 p-2 items-center  ml-0 sm:ml-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                  >
                    <MdSell className="text-2xl mt-1  xl:hidden block"></MdSell>
                    <span className="font-semibold hidden antialiased xl:block mt-1">
                      Start Selling
                    </span>
                  </button>
                </NavLink>
              )}
              {/* developer start */}
              {isLoggedIn && developerStatus == true && (
                <div
                  title="developer section"
                  className="dropdown dropdown-end"
                >
                  <label tabIndex={0}>
                    <button
                      type="button"
                      data-dropdown-toggle="apps-dropdown"
                      class="p-2  text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                      <div className="xl:hidden block">
                        <svg
                          aria-hidden="true"
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                      </div>
                      <span className="font-semibold hidden antialiased xl:block mt-1">
                        Developer
                      </span>
                    </button>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        to={`/developer-profile/${localStorage.getItem(
                          "user_id"
                        )}`}
                      >
                        Developer Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-gigs">My Gigs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-orders">My Orders</NavLink>
                    </li>
                  </ul>
                </div>
              )}
              {/* developer end  */}

              {isLoggedIn && developerStatus == true && (
                <NavLink className="hidden lg:block" to="/create-service">
                  <button
                    type="button"
                    data-dropdown-toggle="apps-dropdown"
                    class="flex flex-row gap-1 p-2 items-center  ml-0  text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                  >
                    <IoIosCreate className="text-2xl xl:hidden block"></IoIosCreate>
                    <span className="font-semibold hidden antialiased xl:block mt-1">
                      Create
                    </span>
                    <span className="font-semibold hidden antialiased xl:block mt-1">
                      Service
                    </span>
                  </button>
                </NavLink>
              )}

              {/* admin start */}
              {isLoggedIn && admin && (
                <NavLink className="hidden lg:block" to="/admin">
                  <button
                    type="button"
                    data-dropdown-toggle="apps-dropdown"
                    class="flex flex-row gap-1 p-2 items-center  ml-0  text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
                  >
                    <RiDashboardFill className="text-2xl xl:hidden block"></RiDashboardFill>
                    <span className="font-semibold hidden antialiased xl:block mt-1">
                      Admin
                    </span>
                  </button>
                </NavLink>
              )}
              {/* admin end  */}

              {/* <!-- Apps --> */}

              {userData && isLoggedIn ? (
                <div
                  title="profile"
                  className="hidden lg:block dropdown dropdown-end"
                >
                  <label tabIndex={0}>
                    <button
                      type="button"
                      class="flex mx-3  text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="w-8 h-8 rounded-full"
                        src={userData?.photoURL}
                        alt={userData?.displayName}
                      />
                    </button>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 py-2 px-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
                  >
                    <DrawerBanner></DrawerBanner>

                    <li>
                      <NavLink to="/chat">Inbox</NavLink>
                    </li>
                    <li>
                      <NavLink to="/track-orders">Manage Orders</NavLink>
                    </li>
                    <li>
                      <NavLink to="/lists">Wishlist</NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings">Settings</NavLink>
                    </li>
                    <li>
                      <button onClick={handleAdminChat}>
                        <NavLink>Contact Admin</NavLink>
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <button className="btn  btn-ghost btn-circle">
                    <NavLink to="/login">
                      <AiOutlineLogin className="w-7 h-7" />
                    </NavLink>
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        <CategoriesHeader></CategoriesHeader>
      </header>
    </div>
  );
};

export default Header;
