import React, { useState } from 'react';

import {
  Container,
  ImageContainer,
  Images,
  LoginContainer,
  FormContainer,
  CheckBox,
  Label,
  Input,
  FlexContainer,
  Wrapper,
  Span,
  LoginButton,
  Button,
  Header,
  ShowHideButton,
  PasswordFieldWrapper,
} from './Styles.js';
function App() {
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password');
  };
  return (
    <Container>
      <ImageContainer>
        <Images />
      </ImageContainer>
      <LoginContainer>
        <FormContainer>
          <Header>Login</Header>
          <Label>Login ID</Label>
          <Input placeholder="Enter Login ID" />
          <Label>Password</Label>
          <PasswordFieldWrapper>
            <Input placeholder="Enter Password" type={passwordType} />
            <ShowHideButton onClick={() => togglePassword()} />
          </PasswordFieldWrapper>

          <FlexContainer>
            <Wrapper>
              <CheckBox />
              <Span>Remember Me</Span>
            </Wrapper>
            <Button color="#F78719">Change Password</Button>
          </FlexContainer>
          <FlexContainer>
            <Wrapper>
              <CheckBox />
              <Span>Agree to</Span>
              <Button color="#F78719" decoration="underline">
                Terms & Conditions
              </Button>
            </Wrapper>
          </FlexContainer>
          <LoginButton>Login</LoginButton>
          <FlexContainer justify="center">
            <Span>Don't have an account?</Span>
            <Button color="#F78719" decoration="underline">
              Register Here
            </Button>
          </FlexContainer>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}

export default App;
