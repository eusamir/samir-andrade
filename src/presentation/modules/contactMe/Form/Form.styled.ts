'use client'
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #1C0D79;
  color: #ffff;
  font-size: 1.1rem;
  padding: 1rem;
  width: 180px;
  border-radius: 2rem;
  &:hover{
    filter: brightness(0.9);
  }
`
export const Input = styled.input`
  width: 25%;
  padding: 1rem;
  border-radius: 3rem;
  border: none;
  &::placeholder{
    color: black;
  }
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  margin-bottom: 2rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Textarea = styled.textarea`
  width: 53%;
  border-radius: 3rem;
  margin-bottom: 2rem;
  text-align: start;
  padding: 1.5rem 0 5rem 1.2rem;
  resize: none;
  &::placeholder{
    color: black;
  }
  &::-webkit-scrollbar {
    width: 10px;
}
`
