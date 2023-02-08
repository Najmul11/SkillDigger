import { Button, Drawer, DrawerBody, DrawerContent,DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { logout } from '../../redux/actions/user';
import LinkButton from './LinkButton/LinkButton';





const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuthenticated, user, message }=useSelector(state=>state.user)

  const dispatch = useDispatch()


  const logoutHandler=()=>{
    dispatch(logout())
   
    onClose()
  }
  useEffect(()=>{
    if(message) {
        // toast.success(message)
        dispatch({type:'clearMessage'})
    }
  },[message, dispatch])



    return (
        <div>

            <ColorModeSwitcher/>

            <Button onClick={onOpen} 
                colorScheme={'yellow'} rounded='full' 
                position={'fixed'} top='6' left={'6'}
                height={'12'} width={'12'}
            >
                <RiMenu5Fill/>
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>

                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'1px'}>Skill Digger</DrawerHeader>
                    <DrawerBody>

                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <LinkButton url={'/'} title={'Home'} onClose={onClose}/>
                            <LinkButton url={'/courses'} title={'Browse All Courses'} onClose={onClose}/>
                            <LinkButton url={'/request'} title={'Request a Course'} onClose={onClose}/>
                            <LinkButton url={'/contact'} title={'Contact Us'} onClose={onClose}/>
                            <LinkButton url={'/about'} title={'About'} onClose={onClose}/>

                        </VStack>

                            <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'} width='80%'>
                                {
                                    isAuthenticated ? 
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link to={'/profile'}>
                                                    <Button onClick={onClose} variant={'ghost'} colorScheme={'yellow'}>Profile</Button>
                                                </Link>
                                                <Button  onClick={logoutHandler} variant={'ghost'}><RiLogoutBoxLine/>Logout</Button>
                                            </HStack>
                                            {
                                                user && user.role==='admin' && 
                                                <Link to={'/admin/dashboard'}>
                                                    <Button onClick={onClose} colorScheme={'purple'} variant='ghost'>
                                                         <RiDashboardFill style={{margin:'4px'}}/> Dashboard 
                                                    </Button>
                                                </Link>
                                            }
                                        </VStack>
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'}  onClick={onClose}>
                                            <Button colorScheme={'yellow'}>Login</Button>
                                        </Link>
                                        <p>OR</p>
                                        <Link  onClick={onClose} to={'/register'}>
                                            <Button  colorScheme={'yellow'}>Sign Up</Button>
                                        </Link>
                                    </>
                                }
                            </HStack>
                           

                    </DrawerBody>
                </DrawerContent>

            </Drawer>


        </div>
    ); 
};

export default Header;