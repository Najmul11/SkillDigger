import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const loginHandler=()=>{

    }

  return (
    <Container h={'95vh '}>

        <VStack h={'full'} justifyContent='center' spacing={'16'}>
            <Heading children={'Welcome to Skill Digger'}/>
            <form onSubmit={loginHandler} style={{width:'100%'}}>

               <Box my={'4'}>
                <FormLabel htmlFor='email' children='EmailAddress'/>
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
                <FormLabel htmlFor='email' children='Password'/>
                    <Input
                    required
                    id='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    focusBorderColor='yellow.500'
                    placeholder=''
                    type={'password'}
                    />
               </Box>

               <Box>
                    <Link to={'/forgotpassword'}>
                        <Button fontSize={'sm'} variant='link'>
                            Forgot Password?
                        </Button>
                    </Link>
               </Box>
               <Button  my={'4'} colorScheme='yellow' type='submit'>Login</Button>

               <Box my={'4'}>
                    <text children='New User?'/>
                    <Link to={'/register'} >
                        <Button colorScheme={'yellow'} variant='link' mx={'2'}>
                            Sign UP
                        </Button>
                    </Link>
               </Box>
            </form>
        </VStack>
    </Container>
  )
}
