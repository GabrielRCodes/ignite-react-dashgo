import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      ) }

      <Logo />
      { isWideVersion && <SearchBox />}
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

/* 

mx = marginX - margin horizontal
mt = marginTop

px = padding horizontal
py = padding vertical

ml="auto" => Para jogar o elemento para o lado direito da tela.

Por padrão o Stack replica a estilização de espaço nos elementos no sentido vertical, uma das formas de se alterar o sentido é com o HStack sendo importado, em vez de se utilizar o direction.

HStack = Horizontal Stack
VStack = Vertical Stack

borderRightWidth={1} => Para criar uma borda apenas na direita.
borderColor="gray.700" => Define a cor da borda.

*/

/* 

Para utilizar ícones, é necessário importar o ícone do chakra antes de utilizar o de terceiros, declarar como "as".

*/