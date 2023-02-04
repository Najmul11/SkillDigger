import { Button, Container, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Course from './Course'

export const Courses = () => {
    const [keyword, setKeyword]=useState('')
    const [category, setCategory]=useState('')

    const addToPlaylistHandler=()=>{

    }

    const categories=[
        "Introduction to Programming", 
        "Web Development Fundamentals",
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
                <Course
                title={'Sample'}
                description={'Sample'}
                creator={'Sample boy'}
                lecture={2}
                image={'https://picsum.photos/300/300'}
                views={23}
                id={'Sample'}
                handler={addToPlaylistHandler}
                />

             </Stack>
        </Container>
  )
}
