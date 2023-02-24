import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTitle from '../../../Hooks/useTitle'
import { deleteUser, getAllUsers, updateUser } from '../../../redux/actions/admin'
import Row from './Row'
import toast from 'react-hot-toast'

export const Users = () => {
  useTitle('admin/Users')
  const {users, loading}=useSelector(state=>state.admin)

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])

  const updateHandler=async(userId)=>{
  const stats=await dispatch(updateUser(userId))
  if (stats.success===true) {
    toast.success(stats.message)
    dispatch({type:'clearMessage'})
  }
  }

  const deleteButtonHandler=(userId)=>{
    dispatch(deleteUser(userId))
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
                    loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}
