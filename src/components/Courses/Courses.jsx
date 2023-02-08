import { Button, Container, Heading, HStack, Input, Spinner, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { getAllCourses } from '../../redux/actions/course'
import { addToPlaylist } from '../../redux/actions/profile'
import Course from './Course'

export const Courses = () => {
    const [keyword, setKeyword]=useState('')
    const [category, setCategory]=useState('')

    const {loading, courses,message, error}= useSelector(state=>state.course)

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getAllCourses(category, keyword))

        if(message){
            toast.success(message)
            dispatch({type:'clearMessage'})
        }
        if(error){
            toast.error(error)
            dispatch({type:'clearError'})
        }
        
    },[dispatch, category, keyword, message, error])

    const addToPlaylistHandler=(id)=>{
        dispatch(addToPlaylist(id))
    }

   
    const categories=[
        "Introduction to Programming", 
        "Web Development",
        "Data Structures and Algorithms", 
        "Machine Learning",
        "Cloud Computing", 
        "Cybersecurity Fundamentals"
    ]
  return (
        <Container minH={'95vh'} maxW='container.lg' paddingY={'8'}>
            <Heading children='All Courses' m='8'></Heading>

            <Input
             onChange={e=>setKeyword(e.target.value)}
             placeholder='Search a course...' type={'text'} 
             value={keyword}  focusBorderColor='yellow.500'
             />

             <HStack overflow={'auto'} paddingY='8' 
             css={{'&::-webkit-scrollbar':{
                display:'none',
             }}}>
                {
                    categories.map((c,i)=>
                    <Button key={i} onClick={()=>setCategory(c)} minW={'80'}>
                        <Text children={c}/>
                    </Button>
                    )
                }
             </HStack>

             <Stack 
             direction={['column', 'row']}
             flexWrap='wrap'
             justifyContent={['flex-start','space-evenly']}
             alignItems={['center', 'flex-start']}
             >
               {
                    loading ? 
                    <VStack justifyContent='center'>
                            <Spinner color='yellow.500' size='xl'></Spinner> 
                    </VStack>
                    :
                    courses?.length >0 ? courses.map(course =>
                    <Course
                        key={course._id} 
                        course={course} 
                        addToPlaylistHandler={addToPlaylistHandler} >
                    </Course>
                    )
                    :
                    <Heading children='No Course Found' mt={'4'} opacity='.9'/>
               }

             </Stack>
        </Container>
  )
}
