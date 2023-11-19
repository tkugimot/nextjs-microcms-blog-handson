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
import { useLocale } from 'use-intl'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

type ContactForm = {
  name: string
  email: string
  message: string
}

// バリーデーションルール
const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('正しいメールアドレス入力してください'),
  message: yup.string().required('必須項目です'),
})

export default function ContactForm() {
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    console.log('aaa')
    console.log(data)
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
      alert('正常に送信できませんでした')
    }
  }

  const onHandle = () => {
    // フォームで入力されたデータをコンソールに表示
    console.log('aaa')
  }

  return (
    <form onSubmit={onHandle}>
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius="lg"
        p={8}
        color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        shadow="base"
      >
        <VStack spacing={5}>
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                id={'name'}
                {...register('name')}
                placeholder="Your Name"
              />
            </InputGroup>
            <FormErrorMessage>
              {errors['name'] && errors['name']?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                type="email"
                id={'email'}
                {...register('email')}
                placeholder="Your Email"
              />
            </InputGroup>
            <FormErrorMessage>
              {errors['email'] && errors['email']?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              id={'message'}
              placeholder="Your Message"
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
            Send Message
          </Button>
        </VStack>
      </Box>
    </form>
  )
}
