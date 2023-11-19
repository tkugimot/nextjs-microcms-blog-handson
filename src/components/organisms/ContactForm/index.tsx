import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'use-intl'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

type ContactForm = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations('Index')
  const locale = useLocale()

  const schema = yup.object({
    name: yup.string().required(t('required')),
    email: yup.string().required(t('required')).email(t('emailValidation')),
    message: yup.string().required(t('required')),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      router.push(`/${locale}/thanks`)
    } else {
      alert(t('failedMessage'))
    }
  }

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="lg"
      p={8}
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      shadow="base"
    >
      <VStack spacing={5}>
        <FormControl isRequired isInvalid={!!errors.name}>
          <FormLabel>{t('nameField')}</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <BsPerson />
            </InputLeftElement>
            <Input
              type="text"
              id={'name'}
              {...register('name')}
              placeholder={t('namePlaceHolder')}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors['name'] && errors['name']?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>{t('emailField')}</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <MdOutlineEmail />
            </InputLeftElement>
            <Input
              type="email"
              id={'email'}
              {...register('email')}
              placeholder={t('emailPlaceHolder')}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors['email'] && errors['email']?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.message}>
          <FormLabel>{t('messageField')}</FormLabel>
          <Textarea
            id={'message'}
            placeholder={t('messagePlaceHolder')}
            rows={6}
            resize="none"
            {...register('message')}
          />
          <FormErrorMessage>
            {errors['message'] && errors['message']?.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: 'blue.500',
          }}
          width="full"
          isLoading={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {t('sendMessage')}
        </Button>
      </VStack>
    </Box>
  )
}
