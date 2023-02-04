import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const Subscribe = () => {
  return (
    <Container h={'95vh'} p='16'>
      <Heading children="Welcome" textAlign={'center'}/>

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
        mt={'5'}
      >
        <Box bg={'yellow.400'} p="4" css={{ borderRadius: '8px 8px 0 0 ' }}>
          <Text color={'black'} children={`Pro Pack - BDT499.00`} />
        </Box>

        <Box p={'2'}>
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text
              children={`Join Pro Pack and get access the Skill Digger exclusives`}
            />
            <Heading size={'md'} children={`BDT499 only`}></Heading>
          </VStack>

          <Button my={'8'} w="full" colorScheme={'yellow'} >
            Buy Now
          </Button>
        </Box>

        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            children="100% refund at cancellation"
            textTransform={'uppercase'}
            size="sm"
            color={'white'}
          />

          <Text fontSize={'xs'} color='white' children='*Terms & Conditions Apply '/>
        </Box>
      </VStack>
    </Container>
  );
};
