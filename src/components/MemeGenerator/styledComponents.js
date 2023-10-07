// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 35px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const MemeFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const FormContainer = styled.form`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const InputCard = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border: 1px solid #7e858e;
  border-radius: 5px;
  font-family: 'Roboto';
  margin-bottom: 15px;
  outline: none;
  color: #5a7184;
`
export const LabelText = styled.label`
  color: #5a7184;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const SelectCard = styled.select`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border: 1px solid #7e858e;
  border-radius: 5px;
  font-family: 'Roboto';
  margin-bottom: 15px;
  outline: none;
  color: #5a7184;
  cursor: pointer;
`
export const Option = styled.option`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  font-family: 'Roboto';
  color: #5a7184;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 50%;
  margin-left:10px
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize}px;
`
