import styled from "styled-components";
import {AiOutlineToTop} from "react-icons/ai";

export const Footer = () => {
    return (
        <Wrapper>
            <FooterText>
                <StyledP>Copyright &copy; 2023 by Bolot | All Rights Reserved.</StyledP>
            </FooterText>
<FooterIconTop>
    <StyledIcon href={'#'}>
<AiOutlineToTop/>
    </StyledIcon>
</FooterIconTop>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background: var(--second-bg-color);
`

const FooterText = styled.div`
`

const StyledP = styled.p`
font-size: 1.6rem;
`

const FooterIconTop = styled.div`

`

const  StyledIcon = styled.a`
    position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: .8rem;
  background: var(--main-color);
  border: .2rem solid var(--main-color);
  border-radius: .6rem;
  font-size: 2.4rem;
  color: var(--bg-color);
  transition: .5s;
  z-index: 1;
  overflow: hidden;
  
  &:hover{
    color: var(--main-color);
  }
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    z-index: -1;
  }
  
  &:hover::before{
    width: 100%;
  }
  
   `
