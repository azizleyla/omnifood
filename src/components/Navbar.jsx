import React from "react";
import styled from "styled-components";
import logo from "../images/omnifood-logo.png";
import { navlinks } from "../constants";

const Navbar = () => {
  return (
    <Header>
      <NavContainer>
        <div className="nav-row">
          <div className="logo">
            <a href="/#">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <ul className="nav-menu">
            {navlinks.map((navlink) => (
              <li
                key={navlink.id}
                className={
                  navlink.id === 6 ? "nav-item cta-link" : "nav-item"
                }
              >
                <a href="/#" className="nav-item">
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </NavContainer>
    </Header>
  );
};
const Header = styled.header`
  background-color: rgb(253, 242, 233);
`;

const NavContainer = styled.nav`
  padding: 2rem 4.8rem;
  position: relative;
  .nav-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 2.2rem;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 4.8rem;
    .nav-item {
      font-weight: 500;
      display: inline-block;
      color: #333;
      font-weight: 500;
      font-size: 1.8rem;
      transition: all 0.3s;
      &.cta-link {
        padding: 1.2rem 2.4rem;
        border-radius: 9px;
        cursor: pointer;
        color: #fff;
        background-color: #e67e22;
      }
    }
  }
`;

export default Navbar;
