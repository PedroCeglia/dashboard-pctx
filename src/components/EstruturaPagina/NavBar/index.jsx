import {
  NavBarStyle,
  NavBarHeader,
  NavBarSectionsList,
  NavBarLinkList,
  NavBarLink,
  NavBarActiveLink,
} from "./style";
import MenuToggle from "./MenuToggle";
import { useLocation } from "react-router-dom";

import navLinks from "../../../constants/navLinks";
/*
      <NavBarHeader>
        <h2>Raça Surf</h2>
      </NavBarHeader>
*/
export default function NavBar({ isActive, setIsActive, theme }) {
  const pathname = useLocation().pathname;
  return (
    <NavBarStyle isActive={isActive} theme={theme}>
      <MenuToggle isActive={isActive} setIsActive={setIsActive} theme={theme} />

      <NavBarSectionsList isActive={isActive}>
        {navLinks.map((section, indexSection) => {
          return (
            <li key={indexSection}>
              <h3>{section.title}</h3>
              <NavBarLinkList theme={theme} isActive={isActive}>
                {section.linkLists.map((item, indexItens) => {
                  
                  const active = item.link == pathname ? "active" : "";
                  const imageSrc = theme.type === "dark" ? "light" : "dark"
                  
                  return (
                    <li key={indexItens + 1000} className={active}>
                      {active ? (
                        <NavBarActiveLink theme={theme} isActive={isActive}>
                          <img src={item.src(imageSrc)} alt={item.title} title={isActive ? "" : item.title}/>
                          <span>{item.title}</span>
                        </NavBarActiveLink>
                      ) : (
                        <NavBarLink theme={theme} to={item.link} isActive={isActive} title={isActive ? "" : item.title}>
                          <img src={item.src(imageSrc)} alt={item.title} />
                          <span>{item.title}</span>
                        </NavBarLink>
                      )}
                    </li>
                  );
                })}
              </NavBarLinkList>
            </li>
          );
        })}
      </NavBarSectionsList>
    </NavBarStyle>
  );
}
