import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'


const Header = () => {

const {isOpen,onOpen,onClose} = useDisclosure()
    return <>
        <Button
            pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} 
      zIndex={'overlay'} h={'10'} borderRadius={'full'} onClick={onOpen} >
            <BiMenuAltLeft size={'20'} />
        </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>VIDEO HUB</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button variant={'ghost'} colorScheme={'purple'}>
                            <Link onClick={onClose} to={'/'}>Home</Link>
                        </Button>
                        <Button variant={'ghost'} colorScheme={'purple'}>
                            <Link onClick={onClose} to={'/videos'}>Video</Link>
                        </Button>
                        <Button variant={'ghost'} colorScheme={'purple'}>
                            <Link onClick={onClose} to={'/videos?category=free'}>Free Video</Link>
                        </Button>
                        <Button variant={'ghost'} colorScheme={'purple'}>
                            <Link onClick={onClose} to={'/upload'}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                        <Button colorScheme={'purple'}>
                            <Link onClick={onClose} to={'/login'}>Log In</Link>
                        </Button>
                        <Button colorScheme={'purple'} variant={'outline'}>
                            <Link onClick={onClose} to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>


                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>;
};

export default Header;
