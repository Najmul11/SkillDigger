import { Button, Container, Heading, Input, Spinner, VStack } from '@chakra-ui/react';
import React, { useState , useEffect} from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from '../../Hooks/useTitle';
import { forgetPassword } from '../../redux/actions/profile';

const ForgotPassword = () => {
    useTitle('Forget password')
    const [email, setEmail]=useState('')
    const {error, message, loading}= useSelector(state=>state.profile)

    const dispatch= useDispatch()

    const submitHandler =(e)=>{
        e.preventDefault()
        dispatch(forgetPassword(email))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch({type:'clearError'})
        }
        if(message){
            toast.success(message)
            dispatch({type:'clearMessage'})
        }
    },[dispatch,error, message])

    return (
        <Container minH={'90vh'} py='16'>

            <form onSubmit={submitHandler}>

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
                    <Button type='submit' w='full' colorScheme={'yellow'} isDisabled={loading && true}>
                        {loading ? <Spinner/> : 'Submit'}
                    </Button>

                </VStack>
            </form>

        </Container>
    );
};

export default ForgotPassword;