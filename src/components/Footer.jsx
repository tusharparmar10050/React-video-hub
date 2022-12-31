import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai'



const Footer = () => {
    return <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get update
                </Heading>
                <HStack borderBottom={'2px solid white'} py='2' >
                    <Input placeholder='Enter Email Here...' border={"none"} borderRadius="none" outline={'none'} focusBorderColor="none" />
                    <Button
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDEO HUB
                </Heading>
                <Text>All rights received</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'sm'} textTransform={'uppercase'}>
                Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a href="https://www.linkedin.com/in/tushar-parmar-4436491a5/">
                linkedin</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'} >
                <a href="https://github.com/tusharparmar10050">GitHub</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'} >
                <a href="https://www.instagram.com/__tushar_parmar__/">
                Instagram</a>
                </Button>
            </VStack>
        </Stack>
    </Box>;
};

export default Footer;
