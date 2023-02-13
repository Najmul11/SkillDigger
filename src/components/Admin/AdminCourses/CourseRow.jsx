import { Button, HStack, Image, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseRow = ({course, coureDetailsHandler, deleteButtonHandler, loading }) => {
    return (
        <Tr>
            <Td>#{course._id}</Td>

            <Td>
                <Image src={course?.poster?.url} />
            </Td>

            <Td>{course.title}</Td>
            <Td textTransform={'uppercase'}>{course.category}</Td>
            <Td>{course.createdBy}</Td>
            <Td isNumeric>{course.views}</Td>
            <Td isNumeric>{course.numOfVideos}</Td>

            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                <Button
                    onClick={() => coureDetailsHandler(course._id, course.title)}
                    variant={'outline'}
                    color="purple.500"
                    isLoading={loading}
                >
                    View Lectures
                </Button>

                <Button
                    onClick={() => deleteButtonHandler(course._id)}
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

export default CourseRow;