import styled from "styled-components";
import {FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import {GrFacebookOption} from "react-icons/gr";
import photo from '@/assets/photo_2023-06-19_09-14-58__1_-removebg-preview.png'
export const Home = () => {
    return (
        <Wrapper className={'home'} id='home' >
            <Content>
                <StyledH1>
                    Hi, I'm
                    <StyledSpan> Bolot Sam</StyledSpan>
                </StyledH1>
                <TextAnimate>
                    <StyledH3>Sr. Data Analyst</StyledH3>
                </TextAnimate>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate, eos fugit impedit
                    minima modi nisi nulla obcaecati perspiciatis porro quidem sapiente, sequi sint vel, veritatis
                    voluptatem.</StyledP>
                <Box>
                    <StyledA href={'#'}>Hire Me</StyledA>
                    <StyledA href={'#'}>Let's Talk</StyledA>
                </Box>
            </Content>
            <HomeSci>
                <StyledSciA href={'#'}>
                    <FaTelegramPlane/>
                </StyledSciA>
                <StyledSciA href={'#'}>
                    <FaWhatsapp/>
                </StyledSciA>
                <StyledSciA href={'#'}>
                    <GrFacebookOption/>
                </StyledSciA>
            </HomeSci>
<ImgHover>

</ImgHover>
        </Wrapper>
    );
};


const Wrapper = styled.section`
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  display: flex;
  align-items: center;
  padding: 0 9%;
  background: url(${photo});
  background-repeat: no-repeat;
  background-size: 40% auto; /* Adjust the size as needed */
  background-position: 96% center;
`
const ImgHover = styled.div`
position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background: transparent;
  transition: 3s;
  
  &:hover{
    background: var(--bg-color);
    opacity: .8;
  }
  
`

const Content = styled.div`
  max-width: 60rem;

`

const StyledH1 = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
`
const StyledSpan = styled.span`
color: var(--text-color);
`
const TextAnimate = styled.div`
  position: relative;
  width: 32.8rem;

`
const StyledH3 = styled.h3`
  font-size: 3.2rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: .7px var(--main-color);
`
const StyledP = styled.p`
  font-size: 1.6rem;
  margin: 2rem 0 4rem;
`

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 34.5rem;
  height: 5rem;

`
export const StyledA = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 100%;
  background: var(--main-color);
  border: .2rem solid var(--main-color);
  border-radius: .8rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: .1rem;
  color: var(--bg-color);
  z-index: 1;
  overflow: hidden;
  transition: .5s;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }

  &:nth-child(2) {
    background: transparent;
    color: var(--main-color);
  }

  &:nth-child(2):hover {
    color: var(--bg-color);
  }

  &:nth-child(2)::before {
    background: var(--main-color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--bg-color);
    z-index: -1;
    transition: .5s;
  }

  &:hover::before {
    width: 100%;
  }
`

const HomeSci = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 170px;
  display: flex;
  justify-content: space-between;
`
const StyledSciA = styled.a`
position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: .2rem solid var(--main-color);
  border-radius: 50%;
  font-size: 20px;
  color: var(--main-color);
  z-index: 1;
  overflow: hidden;
  transition: .5s;
  
  &:hover{
    color: var(--bg-color);
  }
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--main-color);
    z-index: -1;
    transition: .5s;
  }
  
  &:hover::before{
    width: 100%;
  }
  
`


