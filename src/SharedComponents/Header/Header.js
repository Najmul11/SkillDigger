import { Button, Drawer, DrawerBody, DrawerContent,DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import {RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import LinkButton from './LinkButton/LinkButton';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated=true
  const user={
    role:'admin'
  }

  const logoutHandler=()=>{
    console.log(typeof onClose); onClose()
  }

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