import { Box, Button, Container, FormLabel, Heading, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState,  useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseRequest } from '../../redux/actions/contact';

const Request = () => {
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [course, setCourse]=useState('')

    
    const {loading, message, error}= useSelector(state=>state.contact)

    const dispatch = useDispatch()

    const submitHandler = async(e) =>{
        e.preventDefault()
        await dispatch(courseRequest(name, email,course))
        setCourse('')
    }

    useEffect(()=>{
        if (message) {
            toast.success(message)
            dispatch({type:'clearMessage'})
        }
        if (error) {
            toast.error(error)
            dispatch({type:'clearError'})
        }
    },[dispatch, message, error])



    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent='center'>
                <Heading children='Request a Course'/>

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
                        <FormLabel htmlFor='course' children='Course'/>
                        <Textarea
                        required
                        id='course'
                        value={course}
                        onChange={(e)=>setCourse(e.target.value)}
                        focusBorderColor='yellow.500'
                        placeholder='Explain the Course'
                        />
                    </Box>

                    <Button my={'4'} colorScheme='yellow' type='submit' isLoading={loading}>
                        Submit Request
                    </Button>
                </form>

                <HStack spacing={'1'} w='full'>
                    <Text children='Explore Available Courses!' />
                    <Link to={'/courses'}>
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

export default Request;