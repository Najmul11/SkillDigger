import { Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Founder from './Founder'
import introVideo from '../../assets/videos/intro.mp4'
import {RiSecurePaymentFill} from 'react-icons/ri'
import TandC from './TandC'
import data from '../../assets/docs/termsAndCondition'




export const About = () => {
  return (
    <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
        <Heading children='About SKill Digger' textAlign={['center', 'left']}/>

        <Founder/>

        <Stack m='8' direction={['column', 'row']} alignItems='center' spacing={'2'} justifyContent='center'>
              <Box>
                <Link to={'/subscribe'}>
                  <Button colorScheme='yellow' variant={'link'}>
                        Subscribe 
                  </Button>
                </Link>
              </Box>
            <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
                now to become premium users and get access to next level courses
            </Text>
        </Stack>

        <Box>
        <video autoPlay={true} controls
                loop
                muted
                controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}>
            </video>
        </Box>

        <TandC  termsAndCondition={data}/>

        <HStack my={'4'} p='4'>
            <RiSecurePaymentFill/>
            <Heading size={'xs'} fontFamily='sans-serif' textTransform={'uppercase'} children='Payment is secured with RazorPay'/>
        </HStack>
        
    </Container>
  )
}
