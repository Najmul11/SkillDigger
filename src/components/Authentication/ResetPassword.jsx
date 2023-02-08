import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';

const ResetPassword = () => {
    const [password, setPassword]=useState('')
    const {error, message, loading}= useSelector(state=>state.profile)

    const {token}=useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(resetPassword(token, password))
    }
    
    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch({type:'clearError'})
        }
        if(message){
            toast.success(message)
            dispatch({type:'clearMessage'})
            navigate('/login')
        }
    },[dispatch,error, message,navigate])

    return (
        <Container minH={'90vh'} py='16'>

        <form onSubmit={submitHandler}>

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
                <Button isLoading={loading} type='submit' w='full' colorScheme={'yellow'} >Reset Password</Button>

            </VStack>
        </form>

    </Container>
    );
};

export default ResetPassword;