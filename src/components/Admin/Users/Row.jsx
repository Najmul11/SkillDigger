import { Button, HStack, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Row = ({ item, updateHandler, deleteButtonHandler, loading }) => {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>
                <Text color={`${item.role==='admin' && 'purple.500'}`}>
                    {item.role}
                </Text>
            </Td>
            <Td>
                {item.subscription && item.subscription.status === 'active'
                ? 'Active'
                : 'Not Active'}
            </Td>

            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button
                        onClick={() => updateHandler(item._id)}
                        variant={'outline'}
                        color="purple.500"
                        isLoading={loading}
                    >
                    Change Role
                    </Button>

                    <Button
                        onClick={() => deleteButtonHandler(item._id)}
                        color={'purple.600'}
                        isLoading={loading}
                    >
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    );
};

export default Row;