import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail]=useState('')

    return (
        <Container minH={'90vh'} py='16'>
            <form>

                <Heading children='Forget Password'
                my={'16'}
                textTransform='Uppercase'
                textAlign={['center', 'left']}
                />

                <VStack my='8' spacing={'5'}>
                    <Input
                        required
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        focusBorderColor='yellow.500'
                        placeholder='site@hmail.com'
                        type={'email'} 
                    />
                    <Button type='submit' w='full' colorScheme={'yellow'} >Submit</Button>

                </VStack>
            </form>
        </Container>
    );
};

export default ForgotPassword;