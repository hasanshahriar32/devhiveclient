import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import app from "../Configs/Firebase.config";
import { logout } from "../features/api/loginSlice";

const useLogout = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.log(error);
      // handle the error as appropriate
    }
  };

  useEffect(() => {
    // nothing to do here
  }, []);

  return handleLogout;
};

export default useLogout;
