import styled from "styled-components";

export const MenuToggleStyle = styled.button`
  transition: all .5s;
  margin-bottom: 10px;
  align-self: flex-end;

  background-color: ${({ theme }) =>
    theme.type === "dark"
      ? theme.getLightColorRGBA(0)
      : theme.getDarkColorRGBA(0)};
  border: 1px solid
    ${({ theme }) =>
      theme.type === "dark"
        ? theme.getDarkColorRGBA(0)
        : theme.getLightColorRGBA(0)};
  border-radius: 10px;
`;
export const MenuToggleLabel = styled.label`
  width: 50px;
  height: 50px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuToggleLabelSpan = styled.span`
  z-index: 100;

  display: block;
  position: relative;
  width: 30px;
  height: 2px;
  background-color: ${({ theme }) =>
      theme.type !== "dark"
        ? theme.getDarkColorRGBA(1)
        : theme.getLightColorRGBA(1)};
  transition-duration: 0.4s;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) =>
      theme.type !== "dark"
        ? theme.getDarkColorRGBA(1)
        : theme.getLightColorRGBA(1)};
    transition-duration: 0.4s;
  }

  &::before {
    top: 8px;
    transform: rotate(0deg);
  }

  &::after {
    top: -8px;
    transform: rotate(0deg);
  }

  ${({ menuIsOpen }) =>
    menuIsOpen &&
    `
        transform: rotate(45deg);
        &::before {
            top: 0;
            transform: rotate(0);
        }

        &::after {
            height:2px;
            top: 0;
            transform: rotate(90deg);
        }
    `}
`;
