import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <StyledNav href={'#'}>Home</StyledNav>
            <StyledNav href={'#about'}>About</StyledNav>
            <StyledNav href={'#education'}>Education</StyledNav>
            <StyledNav href={'#skills'}>Skills</StyledNav>
            <StyledNav href={'#course'}>Course</StyledNav>
            <StyledNav href={'#price'}>Price</StyledNav>
            <StyledNav href={'#contact'}>Contact</StyledNav>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

`

const StyledNav = styled.a`
  font-size: 1.7rem;
  color: var(--text-color);
  font-weight: 500;
  margin-left: 3.5rem;

`
