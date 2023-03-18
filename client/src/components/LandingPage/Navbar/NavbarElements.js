import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}; */
  background: #F5E9CF;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  top: 0;
  z-index: 10;

  position: fixed;

  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;

  width: 100%;
  margin: auto;

  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  z-index: 1;
  max-width: 1100px;
  position: sticky;
`;

export const NavLogo = styled(LinkR)`
  color: #4D455D;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Bungee Inline', cursive;
  text-decoration: none;
  &:hover {
    color: #E96479;
    transition: 0.3s ease-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
    color: #4D455D;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  &:hover {
    color: #E96479;
    transition: 0.3s ease-out;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #4D455D;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #E96479;
  }
  &:hover {
    color: #E96479;
    transition: 0.3s ease-out;
  }
`;
export const NavLink = styled(LinkR)`
  color: #4D455D;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #E96479;
  }
  &:hover {
    color: #E96479;
    transition: 0.3s ease-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #E96479;
  opacity: 80%;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #E96479;
    color: #010606;
    opacity: 100%;
  }
`;
