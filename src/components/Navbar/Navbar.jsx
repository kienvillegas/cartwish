import React from "react";
import "./Navbar.css";
import LinkWithIcon from "./LinkWithIcon";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar align_center">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="navbar_form align_center">
          <input type="text" className="navbar_search" placeholder="Search " />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="navbar_links align_center">
        <LinkWithIcon title="Home" link="#" emoji={rocket} />
        <LinkWithIcon title="Products" link="/products" emoji={star} />
        <LinkWithIcon title="Log In" link="/login" emoji={idButton} />
        <LinkWithIcon title="Sign Up" link="/signup" emoji={memo} />
        <LinkWithIcon title="My Orders" link="/myorders" emoji={order} />
        <LinkWithIcon title="Log Out" link="/logout" emoji={lock} />
        <NavLink to="/cart" className="align_center">
          Cart <p className="align_center card_counts">0</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
