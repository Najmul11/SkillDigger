import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import vg from '../../assets/images/bg2.png'
import './Home.css'
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from '../../assets/videos/intro.mp4'

export const Home = () => {
  return (
    <section className='home'>
        <div className="container">
            <Stack direction={['column', 'row']} height='100%' justifyContent={['center', 'space-between']} alignItems='center' spacing={['16', '56']}>

                <VStack width={'full'} alignItems={['center','flex-end']} spacing='8'>
                    <Heading children='LEARN FROM THE EXPERTS' size={'2xl'}/>
                    <Text 
                    fontSize={'2xl'}
                    fontFamily='cursive'
                    textAlign={['center', 'left']} children='Next Level Courses made Affordable'/>
                    <Link to={'/courses'}>
                        <Button size={'md'}
                        colorScheme={'yellow'}>Explore Now</Button>
                    </Link>
                </VStack>

                <Image boxSize={'md'} src={vg} objectFit={'contain'} className='vector-graphics'/>
            </Stack>
        </div>
        <Box padding={'8'} bg='blackAlpha.800'>

            <Heading children='OUR BRANDS'
            textAlign={'center'}
            fontFamily='body'
            color={'yellow.400'}
            />

            <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4'}>
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>
            </HStack>

        </Box>

        <div className='container2'>
            <video autoPlay={false} controls 
                controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}>
            </video>
        </div>

    </section>
  )
}
