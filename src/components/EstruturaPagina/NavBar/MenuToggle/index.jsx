import { MenuToggleStyle, MenuToggleLabel, MenuToggleLabelSpan } from "./style";

export default function MenuToggle({
  isActive,
  setIsActive,
  theme,
}) {
  function handleMenuToggle() {
    setIsActive((state) => !state);
  }

  return (
    <>
      <MenuToggleStyle
        onClick={handleMenuToggle}
        menuIsOpen={isActive}
        theme={theme}
      >
        <MenuToggleLabel>
          <MenuToggleLabelSpan menuIsOpen={isActive} theme={theme} />
        </MenuToggleLabel>
      </MenuToggleStyle>
    </>
  );
}
