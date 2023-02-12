'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {Link,
    Box,
    Text,
    Stack,
    Button,
    Icon,
    useColorModeValue,
    chakra,
    VisuallyHidden,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    Center,
    useDisclosure,
    useColorMode,
    Flex,

} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

const NavLink = ({ children } : { children: React.ReactNode }) => {
    <Link href="/"
        px = {2}
        py = {1}
        rounded = {'md'}
        _hover = {{
            textDecoration: 'none',
            bg: 'gray.200',
        }}

    >
        {children}
    </Link>
}


    
    



export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} className="fixed w-screen">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
        </>
    )
}