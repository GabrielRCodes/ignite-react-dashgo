import { Flex, Button, Stack} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
            >
          </Input>
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
            >
          </Input>
        </Stack>
        
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
            Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

/* 

w = width
h = height
align = alignItems
justify = justifyContent
bg = backgroundColor
mt = marginTop
size="lg" = tamanho large

as="form" -> Transformar div em formulário.

8 on chakra = 2rem ou 32px 

Para saber a medida do chakra em rem ou píxel:

Para rem = dividir por quatro
Para px = multiplicar por quatro

User {%number%} para utilizar pixels

Utilizando as props importadas do componente input na pasta Form.

<Input name="email" type="email" label="E-mail"></Input>

*/

