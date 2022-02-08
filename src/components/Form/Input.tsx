import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form"
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: 
  ForwardRefRenderFunction<HTMLInputElement, InputProps> 
    = ({
      name, label, error = null, ...rest
      }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      ) }
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);

/* 

label?: -> O ? significa que a label é opcional


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

=> Passando as props que serão recebidas pelo input no arquivo index.

export function Input({name, label, ...rest}: InputProps) {
=> Passando as props que serão aceitas pelo Input

extends ChakraInputProps + {...rest} => Informa que o input precisa ter todas as suas propriedades juntamente com as props criadas, nesse caso name e label.

Uma ref não é uma propriedade.

*/