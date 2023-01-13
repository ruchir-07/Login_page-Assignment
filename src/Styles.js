import styled from 'styled-components';
import Image from './Assets/Image.png';
import Toggle from './Assets/Toggle.png';
export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  display: flex;
  background: #ffffff;
  height: 100vh;
  width: 100%;
  border-radius: 3px;
  font-size: 1.3vw;
  font-family: 'Poppins';
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  padding: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Images = styled.img`
  max-width: 60%;
  max-height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
Images.defaultProps = {
  src: Image,
  alt: 'logo',
};
export const LoginContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 2rem;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;
export const FormContainer = styled.div`
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  background: #ffffff;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  @media (max-width: 768px) {
    padding: 5%;
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #737b86;
  border-radius: 9px;
  min-height: 56px;
  margin-bottom: 1.5%;
  font-family: 'Poppins';
  font-weight: 500;
  text-indent: 1%;
  font-size: 1.3vw;
  padding: 1vw 0;
  ::placeholder {
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 110%;
    color: #737b86;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 1%;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Header = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 3.5vw;
  line-height: 110%;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify || 'space-between'};
  width: 100%;
`;
export const Wrapper = styled.div`
  align-items: center;
`;

export const Span = styled.span`
  color: '#737B86';
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  height: 1.5vw;
  width: 1.5vw;
  vertical-align: top;
  min-height: 20px;
  min-width: 20px;
`;
export const LoginButton = styled.button`
  background: #1575a7;
  border-radius: 8px;
  min-height: 56px;
  width: 65%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vw;
  line-height: 110%;
  color: #ffffff;
  margin: 5% 0;
  padding: 1.1vw;
  cursor: pointer;
  border: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.4vw;
  }
`;
export const Button = styled.button`
   {
    color: ${(props) => props.color || '#737B86;'};
    text-decoration: ${(props) => props.decoration || 'none'};
    font-family: 'Poppins';
    font-size: 1.3vw;
    border: none;
    background: none;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const PasswordFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 14px;
`;
export const ShowHideButton = styled.img`
  position: absolute;
  border: none;
  min-height: 30px;

  min-width: 30px;
  height: 2vw;
  width: 2vw;
  right: 3%;
  top: 21%;
`;
ShowHideButton.defaultProps = {
  src: Toggle,
  alt: 'logo',
};
