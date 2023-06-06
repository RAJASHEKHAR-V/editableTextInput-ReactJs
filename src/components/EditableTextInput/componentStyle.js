import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputBody = styled.div`
  width: 40%;
  height: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-weight: 500;
  font-size: 25px;
`

export const InputCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  margin-right: 10px;
`

export const TextInput = styled.input`
  width: 50%;
  height: 30px;
  border: 1px solid #cbd2d9;
  font-family: 'Roboto';
  color: #323f4b;
  font-weight: 400;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 5px;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: #d946ef;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
`
