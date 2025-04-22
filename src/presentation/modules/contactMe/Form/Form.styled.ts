'use client'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #14092c;
  color: #9877ff;
  font-size: 1.1rem;
  padding: 1.2rem;
  width: 180px;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    width: 170px;
  }
`
export const Input = styled.input`
  width: 25%;
  padding: 1rem;
  border-radius: 3rem;
  border: none;
  background-color: rgba(153, 119, 255, 0.1);
  &::placeholder {
    color: black;
  }
  @media (max-width: 768px) {
    width: 30%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Textarea = styled.textarea`
  width: 57%;
  border-radius: 3rem;
  margin-bottom: 2rem;
  text-align: start;
  padding: 1.5rem 0 5rem 1.2rem;
  resize: none;
  border: none;
  background-color: rgba(153, 119, 255, 0.1);
  &::placeholder {
    color: black;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
`
