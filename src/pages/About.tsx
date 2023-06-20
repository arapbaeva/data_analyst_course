import styled from "styled-components";
import IMG from '@/assets/photo_2023-06-19_09-14-58__1_-removebg-preview.png'
import {Box, StyledA} from "@/pages/Home";

export const About = () => {
    return (
        <Wrapper id={'about'}>
<StyledH2>About <TextWrapper>Me</TextWrapper></StyledH2>
            <AboutBox>
               <StyledImg src={IMG} alt={''}/>
                <StyledSpan></StyledSpan>
            </AboutBox>

            <Content>
<StyledH3>Data Analyst!</StyledH3>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores commodi cupiditate dolores, eius exercitationem fugiat hic itaque maiores odio officia omnis pariatur sequi sunt totam ut vel velit voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores commodi cupiditate dolores, eius exercitationem fugiat hic itaque maiores odio officia omnis pariatur sequi sunt totam ut vel velit voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores commodi cupiditate dolores, eius exercitationem fugiat hic itaque maiores odio officia omnis pariatur sequi sunt totam ut vel velit voluptate.</StyledP>

                <StyledBtn>
                    <StyledA>Read More</StyledA>
                </StyledBtn>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.section`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap:2rem;
  background: var(--second-bg-color);
  padding-bottom: 6rem;
`
export const StyledH2 = styled.h2`
font-size: 5rem;
  margin-bottom: 3rem;
  text-align: center;
`
const AboutBox = styled.div`
    position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const StyledImg = styled.img`
  height: 90%;
    width: 90%;
  border-radius: 50%;
  border: .2rem solid var(--main-color);
`
export const TextWrapper =  styled.span`
color: var(--main-color)
`

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: .2rem solid var(--second-bg-color);
  border-bottom: .2rem solid var(--second-bg-color);
  border-left: .2rem solid var(--main-color);
  border-right: .2rem solid var(--main-color);
    
`

const Content = styled.div`
    text-align: center;
  
`
const StyledH3 = styled.h3`
    font-size: 2.6rem;
`

const StyledP = styled.p`
    font-size: 1.6rem;
  margin: 2rem 0 3rem;
`

export const StyledBtn = styled(Box)`
display: inline-block;
  width: 15rem;
`