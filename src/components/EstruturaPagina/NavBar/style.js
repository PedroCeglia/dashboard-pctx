import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarStyle = styled.nav`
  min-width: ${({ isActive }) => (isActive ? "250px" : "50px")};
  width: ${({ isActive }) => (isActive ? "10vw" : "50px")};
  min-height: 100vh;
  transition: width .3s;
  background-color: ${({ theme }) => theme.backgroundColor[2]};

  position: fixed;
  top: 0;
  left: 0;


  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: ${({ theme }) => theme.color[0]};
`;

export const NavBarHeader = styled.header`
  width: 100%;
  margin: 0 5px;
  padding-right: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBarSectionsList = styled.ul`
  list-style: none;
  width: 100%;
  height: 80%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  li{
    width: 100%;
  }
  li h3 {
    display:${({ isActive }) => (isActive ? "block" : "none")};
    margin: 10px 0 5px 10px;
    font-size: 1.2em;
  }
`;
export const NavBarLinkList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    width: 90%;
    border-radius: 10px;
    margin-top: 5px;
    padding: 10px ;
    cursor: pointer;
  }
  li:hover, li.active {
    background-color: ${({ theme }) =>
      theme.type != "dark"
        ? theme.getLightColorRGBA(0.4)
        : theme.getDarkColorRGBA(0.4)};
  }
  img {
    width: 30px;
    object-fit: cover;
    margin-right: ${({isActive}) => isActive ? "10px" : "0" };
  }
`;
export const NavBarLink = styled(Link)`

  width: 100%;
  display: flex;
  justify-content: ${({isActive}) => isActive ? "flex-start" : "center" };
  align-items: center;
  text-decoration: none;
  font-size: .9em;
  color: ${({ theme }) => theme.color[0]};
  span{
    display: ${({isActive}) => isActive ? "flex" : "none"};
  }
`;
export const NavBarActiveLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({isActive}) => isActive ? "flex-start" : "center" };
  align-items: center;
  font-size: .9em;
  color: ${({ theme }) => theme.color[0]};
  span{
    display: ${({isActive}) => isActive ? "flex" : "none"};
  }
`;
