/* eslint-disable react/jsx-no-bind */
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./views/Home";
import Profile from "./views/Profile";
import ErrorPage from "./views/ErrorPage";

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  background: #2f9c76;
  line-height: 56px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Nav = styled.nav`
  display: inline-block;
  padding: 0 10px;

  a {
    display: inline-block;
    padding: 0 10px;
    color: #FFF;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.05em;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const SearchInput = styled.input`
  background: #FFF;
  border: 2px solid #ccc;
  line-height: 1.3 !important;
  padding: 5px 10px;
  font-size: 100%;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #0f7c56;
  }
`;

const StyledApp = styled.div`
  padding-top: 60px;
`;

const App = () => {
  const inputHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <StyledApp>
      <Header>
        <Nav>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/profile" activeClassName="active">Profile</NavLink>
          <NavLink exact to="/profile/john" activeClassName="active">John</NavLink>
        </Nav>
        <SearchInput type="search" placeholder="Search..." onInput={inputHandler} />
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:user?" component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
    </StyledApp>
  );
};
export default App;