import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Row from './Row'

export const Users = () => {
  const users=[
    {
      _id:'iojfhvj',
      name:'Naz',
      role:'admin',
      email:'naz@gmail.com',
      subscription:{
        status:'active'
      },
    }
  ]
  const updateHandler=()=>{

  }

  const deleteButtonHandler=()=>{

  }
  return (
    <Box>
         <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users &&
                users.map(item => (
                  <Row key={item._id}
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    item={item}
                    // loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}
