'use client'
import emailjs from '@emailjs/browser';
import * as S from './Form.styled'
import Image from 'next/image'
import { useRef, useState } from 'react'


export function Form(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  console.log(name,email,message)

  const form = useRef()

  const handleSubmit =(e) => {
    e.preventDefault();
    const serviceId = 'service_0z4upg2';
    const templateId = 'template_p405g4d';
    const publicKey = '3gl6tKMJSrgvijKZ9';


    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey
    })
    .then((res)=>{
      console.log(res.text)
      setName('')
      setEmail('')
      setMessage('')
    }).catch((err)=>{
      console.log(err)
    })
  }
  return(
    <S.Form ref={form} onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.Input type="text" placeholder="Your name" name="user_name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <S.Input type="text" placeholder="Your email" name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </S.InputContainer>
      <S.Textarea placeholder="Your message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}>
      </S.Textarea>
      <S.Button>
        Send
        <Image src='/PaperPlaneTilt.svg' alt='icon' width={25} height={25} style={{color:'white'}}/>
      </S.Button>
    </S.Form>
  )
}
