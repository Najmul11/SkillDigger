import React from 'react'
import {Spinner, VStack} from '@chakra-ui/react'

export const Loader = ({color='yellow.500'}) => {
  return (
   <VStack h={'100vh'} justifyContent='center'>
        <div style={{transform:'scale(3)'}}>
            <Spinner color={color} size='xl'></Spinner> 
        </div>
   </VStack>
  )
}
