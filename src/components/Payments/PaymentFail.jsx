import React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';



export const PaymentFail = () => {
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
