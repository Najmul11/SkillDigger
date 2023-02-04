import { Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({views, title, image, id, creator, description, handler, lecture}) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start' ]}>

            <Image src={image} boxSize='60' objectFit={'contain'}/>

            <Heading children={title}
            size={'sm'}
            textAlign={['center', 'left']}
            maxW='200px'
            noOfLines={3}
            fontFamily={'sans-serif'}>
            </Heading>

            <Text noOfLines={2} children={description}/>

            <HStack>
                <Text textTransform={'uppercase'} fontWeight={'bold'} children={'creator'}/>
                <Text textTransform={'uppercase'} fontFamily={'body'} children={creator}/>
            </HStack>

            <Heading textAlign={'center'}
            size='xs'
            children={`Lectures - ${lecture}`}
            textTransform={'uppercase'}
            />

            <Heading 
            size='xs'
            children={`Views - ${views}`}
            textTransform={'uppercase'}
            />

            <Stack direction={['column', 'row']}>
                <Link to={`/course/${id}`}>
                <Button
                    colorScheme='yellow'
                    >
                    Watch Now
                    </Button>
                    
                </Link>
                <Button
                    variant={'ghost'}
                    colorScheme='yellow'
                    onClick={handler}
                    >
                    Add to Playlist
                </Button>
            </Stack>

        </VStack>
    );
};

export default Course;