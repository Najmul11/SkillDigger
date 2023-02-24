import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../../redux/actions/course';


const CourseDetail = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const {lectures}=useSelector(state=>state.course)
  const {user} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(getCourseLectures(id))
  },[dispatch, id])


    if (user?.role !=='admin' && (user?.subscription === undefined || user.subscription.status !=='active')) {
      return <Navigate to='/subscribe'/>
    }

   

    return (
      <>
      {
        lectures && lectures.length >0 ?
        <Grid minH={'90vh'}  templateColumns={['1fr', '3fr 1fr']} py='20'>
           <>
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={lectures?.[lectureNumber]?.video?.url}
            ></video>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber]?.title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber]?.description} />
          </Box>

          <VStack>
            {
                lectures.map((element, index) => (
                    <button
                      onClick={() => setLectureNumber(index)}
                      key={element._id}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        textAlign: 'center',
                        margin: 0,
                        borderBottom: '1px solid rgba(0,0,0,0.2)',
                      }}
                    >
                      <Text noOfLines={1}>
                        #{index + 1} {element.title}
                      </Text>
                    </button>
                  ))
            }
          </VStack>
        </>
        </Grid>
        :
        <Container h={'90vh'} p="16">

          <VStack justifyContent={'center'} h="full" spacing={'4'}>
            <Heading children='No Lecture Found' opacity='.9' textAlign={'center'}/>
          </VStack>

        </Container>
      }
        
      </>
    );
};

export default CourseDetail;