import React, { useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { useNavigate } from 'react-router-dom';



export const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {user}=useSelector(state=>state.user)

    const dispatch =useDispatch()
    const navigate = useNavigate()


    const submitHandler=(e)=>{
      e.preventDefault()
     dispatch(updateProfile(name, email, navigate))
    }

    
  return (
    <Container py="16" minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my="16"
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            defaultValue={user?.name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            focusBorderColor="yellow.500"
          />{' '}
          <Input
            defaultValue={user?.email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <Button
            w="full"
            colorScheme={'yellow'}
            type="submit"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  )
}
