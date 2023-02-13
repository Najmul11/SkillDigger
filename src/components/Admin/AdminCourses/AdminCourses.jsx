import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLecture, deleteLecture } from '../../../redux/actions/admin'
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course'
import CourseModal from './CourseModal'
import CourseRow from './CourseRow'

export const AdminCourses = () => {
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const {courses, loading, lectures}=useSelector(state=>state.course)
  
  const {isOpen, onClose,onOpen}=useDisclosure()
  
  const dispatch= useDispatch()

  useEffect(()=>{
      dispatch(getAllCourses())
      
  },[dispatch])

  const coureDetailsHandler=(id, title)=>{
    onOpen()
    dispatch(getCourseLectures(id))
    setCourseId(id)
    setCourseTitle(title)
  }

  const deleteButtonHandler=()=>{

  }

  const addLectureHandler=(e, courseId, title, description, video)=>{
    e.preventDefault()

    const myForm = new FormData()
    myForm.append('title',title)
    myForm.append('description',description)
    myForm.append('file', video)

    dispatch(addLecture(courseId,myForm))
  }

  const deleteLectureButtonHandler=(courseId, lectureId)=>{
      dispatch(deleteLecture(courseId, lectureId))
  }
  return (
    <Box>
         <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
                {
                    courses && courses.map(course=>
                      <CourseRow 
                      key={course._id} 
                      course={course}
                      coureDetailsHandler={coureDetailsHandler}
                      deleteButtonHandler={deleteButtonHandler}
                      loading={loading}
                      >
                      </CourseRow>    
                    )
                }
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal 
         isOpen={isOpen} onClose={onClose}
         lectures={lectures}
         courseTitle={courseTitle}
         id={courseId}
         deleteButtonHandler={deleteLectureButtonHandler}
         addLectureHandler={addLectureHandler}
         />
    </Box>
  )
}

