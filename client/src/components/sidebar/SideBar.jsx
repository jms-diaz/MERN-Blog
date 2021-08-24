import "./sidebar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SideBar() {
  const [categories, setCategory] = useState([]);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategory(res.data);
    };
    getCategories();
  }, []);
  return (
    <div className="sideBar">
      <div className="sideBar">
        <div className="sideBarItem">
          <span className="sideBarTitle">About Me</span>
          {user ? (
            <img src={PF + user.profilePicture} alt="Icon" />
          ) : (
            <img
              src="https://images.pexels.com/photos/6897769/pexels-photo-6897769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          )}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos eum illum, labore laboriosam minus quam recusandae
            repellendus sunt unde voluptatem.
          </p>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">Categories</span>
          <ul className="sideBarList">
            {categories.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">Follow Me</span>
          <div className="sideBarSocial">
            <i className="sideBarIcon fab fa-facebook" />
            <i className="sideBarIcon fab fa-twitter" />
            <i className="sideBarIcon fab fa-pinterest" />
            <i className="sideBarIcon fab fa-instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
