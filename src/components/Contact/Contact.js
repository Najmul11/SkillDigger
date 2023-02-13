import { Box, Button, Container, FormLabel, Heading, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/contact';

const Contact = () => {
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [message ,setMessage]=useState('')

    const {loading, message:stateMessage, error}= useSelector(state=>state.contact)

    const dispatch = useDispatch()

    const submitHandler = async(e) =>{
        e.preventDefault()
        await dispatch(contactUs(name, email, message))
        setMessage('')
    }

    useEffect(()=>{
        if (stateMessage) {
            toast.success(stateMessage)
            dispatch({type:'clearMessage'})
        }
        if (error) {
            toast.error(error)
            dispatch({type:'clearError'})
        }
    },[dispatch, stateMessage, error])

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent='center'>
                <Heading children='Contact Us'/>

                <form style={{width:'100%'}} onSubmit={submitHandler}>
                
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

                    <Button my={'4'} colorScheme='yellow' type='submit' isLoading={loading}>
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