import React, { useContext } from "react";
import { AuthoContext } from "../context/AuthoProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const Profilio = ({ user }) => {
  const { logOut } = useContext(AuthoContext);

  const handileLogOut = async () => {
    try {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    } catch (error) {}
  };

  const location = useLocation();
  const navigat = useNavigate();

  return (
    <>
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <div className="avatar">
                <div className="w-12  cursor-pointer rounded-full">
                  {user.photoUrl ? (
                    <img src={user.photoURL} alt="non" />
                  ) : (
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  )}
                </div>
              </div>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a href="/data">profilo</a>
              </li>
              <li>
                <a>Order</a>
              </li>
              <li>
                <a>Setting</a>
              </li>
              <button
                className=" btn btn-outline btn-error"
                onClick={handileLogOut}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
