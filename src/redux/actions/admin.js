import axios from "axios";
import { server } from "../store";
import { getAllCourses, getCourseLectures } from "./course";


export const getAllUsers=()=>async dispatch=>{
    try {
        const config = {
            withCredentials:true
        };

        dispatch({type:'getAllUserRequest'})

        const {data}=await axios.get(`${server}/admin/users`,
        config
        )
       dispatch({type:'getAllUserSuccess', payload:data.users})
    } catch (error) {
        dispatch({type:'getAllUserFail', payload:error.response.data.message})
    }
}
export const deleteUser=(userId)=>async dispatch=>{
    try {
        const config = {
            withCredentials:true
        };

        dispatch({type:'deleteUserRequest'})

        const {data}=await axios.delete(`${server}/admin/users/${userId}`,
        config
        )

       dispatch({type:'deleteUserSuccess', payload:data.message})
       dispatch(getAllUsers())
    } catch (error) {
        dispatch({type:'deleteUserFail', payload:error.response.data.message})
    }
}


export const updateUser=(userId)=>async dispatch=>{
    try {
        const config = {
            withCredentials:true
        };

        dispatch({type:'updateUserRequest'})

        const {data}=await axios.put(`${server}/admin/users/${userId}`,{},
        config
        )

       dispatch({type:'updateUserSuccess', payload:data.message})
       dispatch(getAllUsers())
       return data
    } catch (error) {
        dispatch({type:'updateUserFail', payload:error.response.data.message})
    }
}

export const createCourse = formData => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      };
      dispatch({ type: 'createCourseRequest' });
      
      const { data } = await axios.post(`${server}/createcourse`,
        formData,
        config
      );
      
      dispatch({ type: 'createCourseSuccess', payload: data.message });
      return data
    } catch (error) {
      dispatch({type: 'createCourseFail', payload: error.response.data.message});
    }
  };


  export const deleteCourse = id => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
      dispatch({ type: 'deleteCourseRequest' });
  
      const { data } = await axios.delete(`${server}/course/${id}`, config);
  
      dispatch({ type: 'deleteCourseSuccess', payload: data.message });
      dispatch(getAllCourses())
    } catch (error) {
      dispatch({
        type: 'deleteCourseFail',
        payload: error.response.data.message,
      });
    }
  };


export const addLecture=(id,formdata)=>async dispatch=>{
    try {
        const config = {
            headers:{
                'content-type':'multipart/form-data'
            },
            withCredentials:true
        };

        dispatch({type:'addLectureRequest'})

        const {data}=await axios.post(`${server}/course/${id}`,
        formdata,
        config
        )

       dispatch({type:'addLectureSuccess', payload:data.message})
       dispatch(getCourseLectures(id))
    } catch (error) {
        dispatch({type:'addLectureFail', payload:error.response.data.message})
    }
}

export const deleteLecture=(courseId, lectureId)=>async dispatch=>{
    try {
        const config = {
            withCredentials:true
        };

        dispatch({type:'deleteLectureRequest'})

        const {data}=await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
        config
        )

       dispatch({type:'deleteLectureSuccess', payload:data.message})
       dispatch(getCourseLectures(courseId))
    } catch (error) {
        dispatch({type:'deleteLectureFail', payload:error.response.data.message})
    }
}