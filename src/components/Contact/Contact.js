import { Box, Button, Container, FormLabel, Heading, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [message ,setMessage]=useState('')



    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent='center'>
                <Heading children='Contact Us'/>

                <form style={{width:'100%'}}>
                
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name'/>
                        <Input
                        required
                        id='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        focusBorderColor='yellow.500'
                        placeholder='Name'
                        type={'text'}
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Address'/>
                        <Input
                        required
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        focusBorderColor='yellow.500'
                        placeholder='site@hmail.com'
                        type={'email'}
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='message' children='Message'/>
                        <Textarea
                        required
                        id='message'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        focusBorderColor='yellow.500'
                        placeholder='Your Message'
                        />
                    </Box>

                    <Button my={'4'} colorScheme='yellow' type='submit'>
                        Send Mail
                    </Button>
                </form>

                <HStack spacing={'1'} w='full'>
                    <Text children='Request for a Course?' />
                    <Link to={'/request'}>
                        <Button variant={'link'} colorScheme='yellow'>
                            Click
                        </Button>
                    </Link>
                    <Text children='Here'/>
                </HStack>

            </VStack>
        </Container>
    );
};

export default Contact;