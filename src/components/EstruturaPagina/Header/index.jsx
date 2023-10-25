// Import Style
import { HeaderStyle } from "./style";

export default function Header({ navBarIsActiveState, themeContextState }) {
  const [navBarIsActive, setNavBarIsActive] = navBarIsActiveState;
  const { theme, handlerTheme } = themeContextState;

  function handlerToggleTheme(){
    console.log(theme.type)
    handlerTheme(theme.type !== 'dark' ? 'light' : 'dark')
  }

  return (
    <HeaderStyle navBarIsActive={navBarIsActive} theme={theme}>
      <button onClick={handlerToggleTheme}>
        Mudar o Tema!
      </button>
    </HeaderStyle>
  );
}
