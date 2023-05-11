import React from "react";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import { deleteUser, getAuth, updateProfile } from "firebase/auth";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import app from "../../Configs/Firebase.config";

const AccountSettings = () => {
  const auth = getAuth(app);
  const notify = () => toast.success("Profile Updated !");
  const notify1 = () => toast.warning("Reload Required !");
  const notify2 = (err) => toast.error(err);
  const notify3 = (err) => toast.error(err);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.userData);
  const userToDelete = auth.currentUser;
  const userUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("Profile updated!");
        notify();
        notify1();
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
        notify2(error.message);
      });
  };
  // hi
  //   const { user } = useContext(AuthContext);
  //   console.log(user);
  const deleteAccount = () => {
    const agree = window.confirm(
      `Are you sure to delete account ${user?.displayName}?`
    );
    if (agree) {
      deleteUser(userToDelete)
        .then(function () {
          // User deleted..
          console.log("User deleted");
          notify3("User deleted");
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
          notify3(error.message);
        });
    }
  };
  return (
    <div
      data-aos-duration="3000"
      data-aos="fade-left"
      className="bg-white  w-full lg:w-[750px]"
    >
      <ToastContainer />
      <section className="">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update profile
          </h2>
          <form onSubmit={userUpdate} action="#">
            <div >
              <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered w-full"
                  defaultValue={user?.displayName}

                />

              </div>
              <div >
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-bordered w-full"
                    defaultValue={user?.email}
                    placeholder="me*****5@gmail.com"
                  />

                </div>

                
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ONLINE STATUS
                    <p>When online, your Gigs are visible under the Online search filter.</p>
                  </label>
                  <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">GO OFFLINE FOR..</label>
                    <div class="mt-2">
                      <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>1 Day</option>
                        <option>1 Hour</option>
                        <option>6 Hours</option>
                        <option>12 Hours</option>
                      </select>
                    </div>
                  </div>
                </div>
                
              </div>
              <button
                type="submit"
                className="text-white btn btn-info bg-primary-700  absolute right-28 bottom-10"
              >
                Update profile
              </button>

              
              <div className="divider"></div> 
              
              <div >
              <div className=" sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">ACCOUNT DEACTIVATION</dt>
             <oi>
              <p>What happens when you deactivate your account?</p>

             <li>Your profile and Gigs won't be shown on Fiverr anymore. </li>
             <li>Active orders will be cancelled. </li>
             <li>You won't be able to re-activate your Gigs.</li>

             </oi>

              </div>

            </div>


            <div className="flex items-center space-x-4">
             
              <button
                onClick={deleteAccount}
                type="button"
                className="text-error inline-flex items-center hover:text-white border border-error hover:bg-error-content focus:ring-4 focus:outline-none focus:error font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:error-content dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 absolute right-28  rig"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Delete account
              </button>
            </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;
