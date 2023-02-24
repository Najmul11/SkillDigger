import { Avatar, Box, Button, Container, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { register } from '../../redux/actions/user';

export const fileUploadCss={
    cursor:'pointer',
    marginLeft:'-5%',
    width:'110%',
    border:'none',
    height:'100%',
    color:'#ECC94B',
    backgroundColor:'white'
}

const fileUploadStyle={
    '&::file-Selector-button':fileUploadCss
}

const Register = () => {
    useTitle('Register')
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [imagePrev, setImagePrev]=useState('')
    const [image, setImage]=useState('')
    
    const {loading,error} = useSelector(state=>state.user)


    const navigate =useNavigate()
  
    const dispatch = useDispatch()


    const avatarImageHandler=(e)=>{
        const file=e.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const signUpHandler=async(e)=>{
        e.preventDefault()
        const myForm = new FormData()
        myForm.append('name', name)
        myForm.append('email', email)
        myForm.append('password', password)
        myForm.append('file', image)


        const registered=await dispatch(register(myForm))
        if (registered.success===true) {
            navigate('/')
        }
    }
    useEffect(()=>{
        if (error) {
            toast.error(error)
            dispatch({type:'clearError'})
        }
    },[error, dispatch])
    return (
        <Container h={'95vh'}>

        <VStack h={'full'} justifyContent='center' spacing={'16'}>
            <Heading textTransform={'uppercase'} children={'Registration'}/>

            <form onSubmit={signUpHandler} style={{width:'100%'}}>

                <Box my={'4'} display='flex' justifyContent={'center'}>
                    <Avatar src={imagePrev} size='2xl'/>
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor='name' children='Name'/>
                    <Input
                    required
                    id='Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    focusBorderColor='yellow.500'
                    placeholder='John Doe'
                    type={'text'}
                    />
               </Box>

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
                <FormLabel htmlFor='password' children='Password'/>
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

               <Box my={'4'}>
                <FormLabel htmlFor='choseAvatar' children='Chose Avatar'/>
                    <Input
                    accept='image/*'
                    required
                    id='choseAvatar'
                    focusBorderColor='yellow.500'
                    placeholder=''
                    type={'file'}
                    onChange={avatarImageHandler}
                    css={fileUploadStyle}
                    />
               </Box>

               <Button isLoading={loading} my={'4'} colorScheme='yellow' type='submit'>Sign Up</Button>

               <Box my={'4'}>
                    <Text children='Have an Account?'/>
                    <Link to={'/login'} >
                        <Button colorScheme={'yellow'} variant='link' mx={'2'}>
                            Login
                        </Button>
                    </Link>
               </Box>
            </form>
        </VStack>
    </Container>
    );
};

export default Register;