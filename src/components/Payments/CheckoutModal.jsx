import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, VStack, Container, Input, FormControl, FormLabel, Box } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/actions/subscription';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../redux/actions/user';

const stripePromise=loadStripe('pk_test_51MM2bXEUzOIjs3850ZceXta2ian9MEvnN55bFWFTzUfdBd4Q61msbLe9UP2Xth7AFoXinUVQUY5zJYDj8ltziadQ00u78jnJpo')

export const CheckoutModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Skill Digger Premeum Membership</ModalHeader>
          <ModalBody>
            <Container>
                    <Elements stripe={stripePromise}>
                        <PayForm/>
                    </Elements>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

const PayForm=()=>{
    const stripe= useStripe()
    const elements = useElements()
    const {user} = useSelector(state=>state.user)
    const {loading} = useSelector(state=>state.subscription)
    const navigate = useNavigate()

    const dispatch=useDispatch()
    
    const handleSubmit=async(e)=>{
      e.preventDefault()

      // stripe ar elements na thakle return the function./ if stripejs not loaded yet
      if (!stripe || ! elements) {
          return 
      }

      // there can only be one type of element(PaymentElement, CardElement etc ) ... so get it
      const card=elements.getElement(CardElement)
      if (card===null) {
          return
      }

      // create payment method and interact with other stripejs apis 
      const {paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
      });


      const paymentInfo=await dispatch(buySubscription(paymentMethod?.id))
      if (paymentInfo.payment_id!==undefined) {
          navigate(`/paymentsuccess?ref=${paymentInfo.payment_id}`)
          dispatch(loadUser())
      }else{
        navigate(`/paymentfail`)
      }
      
  }
    return(
      <form onSubmit={handleSubmit}>
          <VStack spacing={'3'}>

              <FormControl>
                  <FormLabel  mt={'0'} mb='0' htmlFor="my-input" fontSize={'sm'}>Name</FormLabel>
                  <Input mt='0' id="my-input" placeholder="Enter text here" focusBorderColor="yellow.500" disabled defaultValue={user?.name}/>
              </FormControl>

              <FormControl>
                  <FormLabel mt={'0'} mb='0' htmlFor="my-input" fontSize={'sm'}>Email</FormLabel>
                  <Input mt={'0'} id="my-input" placeholder="Enter text here" focusBorderColor="yellow.500" disabled defaultValue={user?.email}/>
              </FormControl>

              <Box w={'full'}>
                  <FormLabel  mt={'0'} mb='0' htmlFor="my-input" fontSize={'sm'}>Card Information</FormLabel>
                  <Box p={'3'} border='1px' focusBorderColor="blue.500" borderColor={'gray.100'} borderRadius='md'>
                      <CardElement></CardElement>
                  </Box>
              </Box>
              <Button isLoading={loading} w="full" colorScheme={'yellow'} type="submit" >
              Proceed
              </Button> 

          </VStack>
      </form>
    )
}
