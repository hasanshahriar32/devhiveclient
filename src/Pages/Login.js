import React, { useState } from "react";
import LoginProviders from "../Components/LoginProviders/LoginProviders";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Configs/Firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setUserData,
  setUserLoading,
} from "../features/api/loginSlice";
import { registerUser } from "../features/api/Auth/userActions";

const Login = () => {
  const [users, setUsers] = useState({});
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const demoUser = () => {
    setUsers({
      email: "hasanshahriar32@outlook.com",
      password: "grammarpro",
    });
    // now call the submitLogin function
    setLoading(true);
    const email = users.email;
    const password = users.password;
    const name = users.name;
    const image =
      users.image ||
      "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setLoggedIn(true));
        dispatch(setUserData(user));
        const userData = {
          name: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          verified: user?.emailVerified,
          pic: user?.photoURL,
        };
        dispatch(registerUser(userData));
        dispatch(setUserLoading(false));
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(users);
    setLoading(true);
    const email = users.email;
    const password = users.password;
    const name = users.name;
    const image =
      users.image ||
      "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setLoggedIn(true));
        dispatch(setUserData(user));
        const userData = {
          name: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          verified: user?.emailVerified,
          pic: user?.photoURL,
        };
        dispatch(registerUser(userData));
        dispatch(setUserLoading(false));
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    //send data to firebase to create user
  };
  const handleForgetPass = (e) => {
    e.preventDefault();

    const forgetPass = e.target.forgetpass.value;
    console.log(forgetPass);
    sendPasswordResetEmail(auth, forgetPass)
      .then(() => {
        console.log("reset email sent");
        alert("reset email sent");
        // Password reset email sent!
        // ..
        //close the modal lebelled my-modal-6
        const modal = document.getElementById("my-modal-6");
        modal.checked = false;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  const handleEventBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUsers = { ...users };
    newUsers[field] = value;
    setUsers(newUsers);
    console.log(value, field);
  };
  const handleForgetPassword = () => {
    console.log("forget password");

    users?.email ? console.log(users?.email) : alert("email not found");
  };
  if (isLoggedIn && localStorage.getItem("jwt")) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <section className="bg-gray-50 py-5 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <img
            src="https://i.ibb.co/FHqDjdX/IMG-20230404-110630-fotor-bg-remover-20230404111148.png"
            className="w-60 h-auto"
            alt=""
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={submitLogin}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onBlur={handleEventBlur}
                    value={users.email}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onBlur={handleEventBlur}
                    value={users.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <label
                    htmlFor="my-modal-6"
                    className="text-sm  font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forget Password?
                  </label>
                </div>
                <button type="submit" className="devhiveprimarybtn">
                  SIGN IN
                </button>
                <button onClick={demoUser} className="btn btn-secondary w-full">
                  Demo User
                </button>
              </form>
              <div className="divider">OR</div>

              <LoginProviders></LoginProviders>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>

              <div>
                {/* modal  */}

                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <form onSubmit={handleForgetPass} action="">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor=""
                      >
                        Enter Your Email
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="email"
                        name="forgetpass"
                        defaultValue={users?.email}
                        id=""
                        // onBlur={handleEventBlur}
                        required=""
                      />

                      <div className="modal-action">
                        <button type="submit" className="btn">
                          Submit
                        </button>
                        <label htmlFor="my-modal-6" className="btn">
                          Cancel
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
