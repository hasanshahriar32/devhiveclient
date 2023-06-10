export const getSenderName = (loggedUser, users) => {
  return users[0]?._id !== loggedUser ? users[0]?.name : users[1]?.name;
};
export const getSenderFull = (loggedUser, users) => {
  return users[0]?._id !== loggedUser ? users[0] : users[1];
};
export const getSenderPic = (loggedUser, users) => {
  return users[0]?._id !== loggedUser ? users[0]?.pic : users[1]?.pic;
};
