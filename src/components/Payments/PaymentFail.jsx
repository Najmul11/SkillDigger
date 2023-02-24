import React from 'react'
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';



export const PaymentFail = () => {
  useTitle('Payment fail')
  return (
    <Container h={'90vh'} p="16">

    <VStack justifyContent={'center'} h="full" spacing={'4'}>

      <RiErrorWarningFill size={'5rem'} />
      <Heading my={'8'} textAlign="center" textTransform={'uppercase]'} children="Payment fail" />

      <Link to="/subscribe">
        <Button variant={'ghost'} colorScheme="yellow">
          Try again
        </Button>
      </Link>
      
    </VStack>

  </Container>
  )
}
