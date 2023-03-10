import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti'


const Footer = () => {
    return (
        <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>

            <Stack direction={['column', 'row']}>

                <VStack alignItems={['center', 'flex-start']} width='full'>
                    <Heading children='All Rights Reserved' color={'white'}/>
                    <Heading children='@Skill Digger' color={'yellow.400'} fontFamily={'body'} size={'sm'}/>
                </VStack>

                <HStack spacing={['2', '10']} justifyContent='center' color={'white'} fontSize='50'>
                    <a href="https://www.youtube.com/" target={'_blank'} rel="noreferrer">
                        <TiSocialYoutubeCircular/>
                    </a> 
                    <a href="https://instagram.com/" target={'_blank'} rel="noreferrer">
                        <TiSocialInstagramCircular/>
                    </a>
                </HStack>

            </Stack>

        </Box>
    );
};

export default Footer;