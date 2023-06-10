import axios from "axios";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../../../features/chat/chatSlice";

const ProfileModal = ({ current }) => {
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const deleteChat = async () => {
    try {
      //   setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const { data } = await axios.delete(
        `https://devhiveserver.vercel.app/chat/${localStorage.getItem(
          "user_id"
        )}`,
        {
          data: {
            chatId: selectedChat?._id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      //   setLoading(false);
      console.log(data);
      dispatch(setSelectedChat(null));
      if (data.deletedCount > 0) {
        alert("delete successful");
      } else if (data.deletedCount === 0) {
        alert("already deleted");
      }
    } catch (error) {
      //   setLoading(false);
      alert("error occured");
    }
  };
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-4"
        className="btn-circle btn-sm absolute  btn btn-outline btn-accent z-10 top-4 right-10"
      >
        <CgProfile></CgProfile>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="avatar flex justify-center w-full">
            <div className="w-24 rounded-full">
              <img src={current?.pic} />
            </div>
          </div>
          <h2 className="text-center mt-6 text-2xl font-mono font-semibold">
            {current?.name}
          </h2>
          <h2 className="text-center mt-2 text-lg">{current?.email}</h2>
          <div className="flex mt-10 justify-end">
            <button onClick={deleteChat} className="btn btn-error btn-outline">
              Delete Chat
            </button>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ProfileModal;
