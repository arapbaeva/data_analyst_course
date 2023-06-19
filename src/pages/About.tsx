import styled from "styled-components";
import IMG from '@/assets/photo_2023-06-19_09-14-58__1_-removebg-preview.png'
import {Box, StyledA} from "@/pages/Home";

export const About = () => {
    return (
        <Wrapper id={'about'}>
<StyledH2>About <span>Me</span></StyledH2>
            <AboutBox>
               <StyledImg src={IMG} alt={''}/>
                <StyledSpan></StyledSpan>
            </AboutBox>

            <Content>
<StyledH3>Data Analyst!</StyledH3>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores commodi cupiditate dolores, eius exercitationem fugiat hic itaque maiores odio officia omnis pariatur sequi sunt totam ut vel velit voluptate.</StyledP>

                <Box>
                    <StyledA>Read More</StyledA>
                </Box>
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
const StyledH2 = styled.h2`
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
    width: 90%;
  border-radius: 50%;
  border: .2rem solid var(--main-color);
  
`

const StyledSpan = styled.span`
`

const Content = styled.div`
`
const StyledH3 = styled.h3`
`

const StyledP = styled.p`
`