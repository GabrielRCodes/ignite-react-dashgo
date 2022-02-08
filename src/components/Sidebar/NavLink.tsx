
import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        align="center"
        {...rest}
      >
        <Icon
          as={icon}
          fontSize="20" 
        />
        <Text
          ml="4"
          fontWeight="medium"
        >
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}

/* 

ElementType = Em vez de declarar o elemento é passado o nome do elemento.
interface NavLinkProps extends ChakraLinkProps -> Extendendo para estilizações adicionais futuras.

*/