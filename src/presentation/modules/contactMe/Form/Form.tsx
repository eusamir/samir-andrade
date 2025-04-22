'use client'
import emailjs from '@emailjs/browser'
import * as S from './Form.styled'
import { useRef } from 'react'
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  user_name: z.string().min(2, 'Nome é obrigatório'),
  user_email: z.string().email('Email inválido'),
  message: z.string().min(5, 'Mensagem muito curta'),
})

type FormData = z.infer<typeof schema>

export function Form() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async () => {
    const isValid = await trigger()
    if (!isValid) {
      Object.values(errors).forEach((error) => {
        toast.error(error.message, { position: 'top-right' })
      })
      return
    }

    const serviceId = 'service_0z4upg2'
    const templateId = 'template_p405g4d'
    const publicKey = '3gl6tKMJSrgvijKZ9'

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, { publicKey })
        .then(() => {
          toast.success('Mensagem enviada com sucesso!', {
            position: 'top-right',
          })
          reset()
        })
        .catch((err) => {
          toast.error('Erro ao enviar mensagem. Tente novamente!', {
            position: 'top-right',
          })
          console.error(err)
        })
    }
  }

  return (
    <S.Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="Seu Nome"
          {...register('user_name')}
        />
        <S.Input
          type="text"
          placeholder="Seu Email"
          {...register('user_email')}
        />
      </S.InputContainer>

      <S.Textarea
        placeholder="Sua mensagem"
        {...register('message')}
      ></S.Textarea>

      <S.Button type="submit">
        Enviar
        <PaperPlaneTilt size={25} color="#9877FF" weight="fill" />
      </S.Button>
    </S.Form>
  )
}
