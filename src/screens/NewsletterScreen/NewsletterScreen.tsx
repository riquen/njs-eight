'use client'

import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import { ChangeEvent, useState } from "react";

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues)

  return {
    values,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setValues({
        ...values,
        [name]: value
      })
    },
  }
}

export default function NewsletterScreen() {
  const { values, handleChange } = useForm({
    initialValues: {
      emailNewsletter: '',
    }
  })

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()

          if (!values.emailNewsletter.includes('@')) {
            alert('E-mail inválido')
            return
          }

          alert('E-mail cadastrado com sucesso')

          fetch('/api/newsletter/optin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
            .then(async (res) => {
              const response = await res.json()
              console.log("🚀 ~ .then ~ response:", response)
            })
            .catch(() => {

            })
        }}
      >
        <Box
          styleSheet={{
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            padding: '16px',
          }}
        >
          <Image
            src="https://www.github.com/riquen.png"
            alt="Foto de perfil - Henrique Nunes"
            styleSheet={{
              borderRadius: '100%',
              width: '100px',
              height: 'auto',
              marginBottom: '16px',
            }}
          />
          <Text
            variant="heading3"
            styleSheet={{
              textAlign: 'center',
            }}
          >
            Newsletter do Henrique
          </Text>
          <NewsletterTextField
            name="emailNewsletter"
            placeholder="Digite seu e-mail"
            value={values.emailNewsletter}
            onChange={handleChange}
          />
          <Button
            styleSheet={{
              marginTop: '16px',
            }}
            fullWidth
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

interface NewsletterTextFieldProps {
  name: string
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
  const theme = useTheme()

  return (
    <Box
      styleSheet={{
        width: '100%',
        maxWidth: '300px',
      }}
    >
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          border: `1px solid ${theme.colors.neutral.x300}`,
          borderRadius: '4px',
          padding: '8px',
          width: '100%',
        }}
      />
    </Box>
  )
}
