import React from "react";
import { Cart4 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="parent-header">
      <div className="header">
        <ul>
        <li>
            <Link to={"/"}><img src="logo25.png" style={{height : "45px"}}/></Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <Cart4 size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
