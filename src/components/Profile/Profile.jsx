import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ChangePhotoBox from './ChangePhotoBox';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPlaylist, updateProfilePicture } from '../../redux/actions/profile';
import { toast } from 'react-hot-toast';
import { cancelSubscription } from '../../redux/actions/subscription';
import useTitle from '../../Hooks/useTitle';




export const Profile = () => {
  useTitle('Profile')
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {user}=useSelector(state=>state.user)
  const {message, error} = useSelector(state=>state.profile)
  const {loading, error:subError} = useSelector(state=>state.subscription)

  const dispatch = useDispatch()

  const removeFromPlaylistHandler=async (courseId)=>{
        const stats= await dispatch(removeFromPlaylist(courseId))

        if(stats.success===true){
          toast.success(stats.message)
          dispatch({type:'clearMessage'})
        }
  }
  const changeImageSubmitHandler=async(e, image)=>{
    e.preventDefault()
    const myForm = new FormData()
    myForm.append('file', image)
    dispatch(updateProfilePicture(myForm,onClose))
   
  }
  const handleCancelSubscription  = async()=>{
    const stats=await  dispatch(cancelSubscription())
    if (stats.success===true) {
      toast.success(stats.message)
      dispatch({type:'clearMessage'})
    }
  }

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }
    if(subError){
      toast.error(subError)
      dispatch({type:'clearError'})
    }
    
  },[error, message, dispatch, subError])

  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'}  src={user?.avatar?.url}/>
          <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>

          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>

          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button onClick={handleCancelSubscription } color={'yellow.500'} variant="unstyled" isLoading={loading}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>

            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>

          </Stack>
        </VStack>
      </Stack>
    
      <Heading children="Playlist" size={'md'} my="8" />
        {
            user.playlist.length > 0 && (
                <Stack
                  direction={['column', 'row']}
                  alignItems={'center'}
                  flexWrap="wrap"
                  p="4"
                >
                  {user.playlist.map(element => (
                    <VStack w="48" m="2" key={element.course}>
                      <Image
                        boxSize={'full'}
                        objectFit="contain"
                        src={element.poster}
                      />
        
                      <HStack>
                        <Link to={`/course/${element.course}`}>
                          <Button variant={'ghost'} colorScheme="yellow">
                            Watch Now
                          </Button>
                        </Link>
        
                        <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                          <RiDeleteBin7Fill />
                        </Button>
                      </HStack>
                    </VStack>
                  ))}
                </Stack>
            )
        }

        <ChangePhotoBox
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />

    </Container>
  );
};
