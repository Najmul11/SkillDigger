import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/actions/user'
import toast from 'react-hot-toast'

export const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const location =useLocation()
    const navigate =useNavigate()
    const from =location?.state?.from?.pathname || '/'
    

    const dispatch = useDispatch()
    const {error, message, user} = useSelector(state=>state.user)

    const loginHandler=async(e)=>{
        e.preventDefault()
         dispatch(login(email,password, from,navigate))
    }
    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch({type:'clearError'})
        }
        if(message){
            toast.success(message)
            dispatch({type:'clearMessage'})
            navigate(from, {replace:true})

        }
    },[error, message, dispatch, user,navigate, from])

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
