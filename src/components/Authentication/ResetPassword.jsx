import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ResetPassword = () => {
    const [password, setPassword]=useState('')

    return (
        <Container minH={'90vh'} py='16'>
        <form>

            <Heading children='Reset Password'
            my={'16'}
            textTransform='Uppercase'
            textAlign={['center', 'left']}
            />

            <VStack my='8' spacing={'5'}>
                <Input
                    required
                    id='email'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    focusBorderColor='yellow.500'
                    placeholder='Password'
                    type={'password'} 
                />
                <Button type='submit' w='full' colorScheme={'yellow'} >Reset Password</Button>

            </VStack>
        </form>
    </Container>
    );
};

export default ResetPassword;