import styled from "styled-components";
import {Menu} from "@/layout/menu/Menu/Menu";
import {BiMenu} from "react-icons/bi";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledLink href={'#'}>Bolot.</StyledLink>
            <StyledNavIcon>
                <BiMenu/>
            </StyledNavIcon>
                   <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`
const StyledLink = styled.a`
font-size: 2.5rem;
  color: var(--text-color);
  font-weight:600 ;
`
const StyledNavIcon = styled.div`
    font-size: 3.6rem;
  color: var(--text-color);
  cursor: pointer;
  display: none;
    `
