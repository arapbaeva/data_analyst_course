import styled from "styled-components";
import {StyledH2, TextWrapper} from "@/pages/About";
import {MdCalendarMonth} from "react-icons/md";


export const Education = () => {
    return (
        <Wrapper id={'education'}>
            <StyledH2>My <TextWrapper>Journey</TextWrapper></StyledH2>
            <MainBlock>
                <SecondBlock>
                    <StyledH3>Education</StyledH3>
                    <EducationBox>
                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2009-2014</Icon>
                                <StyledTitle>
                                    Bachelor Degree - AUCA
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2015-2017</Icon>
                                <StyledTitle>
                                    Master Degree - HSE
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2020-2021</Icon>
                                <StyledTitle>
                                    Master Degree - TUM
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>
                    </EducationBox>
                </SecondBlock>


                <SecondBlock>
                    <StyledH3>Experience</StyledH3>
                    <EducationBox>
                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2015-2016</Icon>
                                <StyledTitle>
                                    Auditor - «Ernst & Young»
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2018-2020</Icon>
                                <StyledTitle>
                                    Business Analyst - Pepsico Inc.
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2020-2021</Icon>
                                <StyledTitle>
                                    Data Analyst - PromOsnastka
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2021-2021</Icon>
                                <StyledTitle>
                                    Data Analyst - Lalafo
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>

                        <EducationContent>
                            <Content>
                                <Icon><Calendar/>2021-2023</Icon>
                                <StyledTitle>
                                    Data Analyst - EPAM
                                </StyledTitle>
                                <StyledP>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem
                                    ducimus enim quas quidem vitae.
                                </StyledP>
                            </Content>
                        </EducationContent>
                    </EducationBox>
                </SecondBlock>
            </MainBlock>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 5rem;
`
const MainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 0 15%;
`
const SecondBlock = styled.div`
  flex: 1 1 40rem;
`
const StyledH3 = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 1.5rem 2rem;
`
const EducationBox = styled.div`
border-left: .2rem solid var(--main-color) ;
`
const EducationContent = styled.div`
position: relative;
  padding-left: 2rem;
  
  &::before{
    content: '';
    position: absolute;
    top:0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: var(--main-color);
    border-radius: 50%;
  }
`
const Content = styled.div`
position: relative;
  padding: 1.5rem;
  border: .2rem solid var(--main-color);
  border-radius: .6rem;
  margin-bottom: 2rem;
  overflow: hidden;
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left:0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    z-index: -1;
    transition: .5s;
  }
  
  &:hover::before{
    width: 100%;
  }
`

export const Icon = styled.div`
font-size: 1.5rem;
  color: var(--main-color);
  padding-bottom: .5rem;
`
const Calendar = styled(MdCalendarMonth)`
padding-right: .5rem;
`

export const StyledTitle = styled.h3`
font-size: 2rem;
`
const StyledP = styled.p`
font-size: 1.6rem;
  padding-top: .5rem;
  color: #a9b3c1;;
`