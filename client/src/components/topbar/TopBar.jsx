import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook" />
        <i className="topIcon fab fa-twitter" />
        <i className="topIcon fab fa-pinterest" />
        <i className="topIcon fab fa-instagram" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            <Link to="/" className="link">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
            {user.profilePicture ? (
              <img
                src={PF + user.profilePicture}
                className="topImage"
                alt="Icon"
              />
            ) : (
              <img
                src="https://images.pexels.com/photos/6897769/pexels-photo-6897769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            )}
          </Link>
        ) : (
          <>
            <li className="topListItem" style={{ listStyle: "none" }}>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="topListItem" style={{ listStyle: "none" }}>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </>
        )}
        <i className="topSearchIcon fas fa-search" />
      </div>
    </div>
  );
}
