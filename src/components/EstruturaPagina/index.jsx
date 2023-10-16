import { useState } from "react";
// Import Style
import { EstruturaPaginaStyle, ConteudoPaginaStyle } from "./style";
// Import Components
import Header from "./Header";
import NavBar from "./NavBar";

import { useThemeContext } from "../../contexts/ThemeContext";

export default function EstruturaPagina({ children }) {
  const [navBarIsActive, setNavBarIsActive] = useState(false);

  const { theme } = useThemeContext();

  return (
    <EstruturaPaginaStyle theme={theme}>
      <div className="projeto-top-page"></div>
      <NavBar
        theme={theme}
        isActive={navBarIsActive}
        setIsActive={setNavBarIsActive}
      />
      <ConteudoPaginaStyle theme={theme} navBarIsActive={navBarIsActive}>
        {children}
      </ConteudoPaginaStyle>
    </EstruturaPaginaStyle>
  );
}
