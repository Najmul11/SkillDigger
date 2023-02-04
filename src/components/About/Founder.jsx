import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Founder = () => {
    return (
        <Stack direction={['column', 'row']} spacing={['4', '16']} padding='8'>

            <VStack>
                <Avatar src='https://picsum.photos/200' boxSize={['45', '40']} /> 
                <Text children='Co-Founder' opacity={0.7}/>
            </VStack>

            <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
                <Heading children='Md Naz' size={['md','xl']}/>
                <Text textAlign={['center','left']}
                children={`Skill Digger is a skill-sharing platform. Its for the hustlers. Our mission is to empower individuals by connecting them with the resources and knowledge they need to learn new skills and advance in their careers. Our platform makes it easy for people to share and learn from each other. Join Skill Digger community today and unlock your true potential`}
                />
            </VStack>

        </Stack>
    );
};

export default Founder;