import styled from "styled-components";
import {StyledBtn, StyledH2, TextWrapper} from "@/pages/About";
import {Box, StyledA} from "@/pages/Home";

export const Contact = () => {
    return (
        <Wrapper id={'contact'}>
            <StyledH2>Contact <TextWrapper>Me</TextWrapper></StyledH2>

            <StyledForm action={'#'}>
                <InputBox>
                    <InputField>
                        <StyledInput type={'text'} placeholder={'Full Name'} required/>
                        <Focus></Focus>
                    </InputField>
                    <InputField>
                        <StyledInput type={'text'} placeholder={'Email Address'} required/>
                        <Focus></Focus>
                    </InputField>
                </InputBox>

                <InputBox>
                    <InputField>
                        <StyledInput type={'number'} placeholder={'Mobile Number'} required/>
                        <Focus></Focus>
                    </InputField>
                    <InputField>
                        <StyledInput type={'text'} placeholder={'Email Subject'} required/>
                        <Focus></Focus>
                    </InputField>
                </InputBox>

                <TextAreaField>
                    <StyledTextArea name={''} id={''} cols="30" rows="10" placeholder={'Your Message'}
                                    required></StyledTextArea>
                    <Focus></Focus>
                </TextAreaField>

                <StyledBtn>
                    <StyledA type={'submit'}>Submit</StyledA>
                </StyledBtn>
            </StyledForm>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  min-height: auto;
  padding-bottom: 7rem;
`

const StyledForm = styled.form`
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
`
const InputBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const InputField = styled.div`
  position: relative;
  width: 49%;
  margin: .8rem 0;
`
const StyledInput = styled.input`
    width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: transparent;
  border-radius: .6rem;
  border: .2rem solid var(--main-color);
  
  &::placeholder{
    color: var(--text-color);
  }
  
`
const Focus = styled.span`
    position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: transparent;
  border-radius: .6rem;
  z-index: -1;
  
`

const TextAreaField = styled.div`
    position: relative;
  margin: .8rem 0 2.7rem;
  display: flex;
`
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: transparent;
  border-radius: .6rem;
  border: .2rem solid var(--main-color);
  resize: none;
  
  &::placeholder{
    color: var(--text-color);
  }
  
`


