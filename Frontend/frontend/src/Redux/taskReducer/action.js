import axios from "axios";
import {
   GET_PROJECT,
  POST_TASK,
  TASK_FALIURE,
  TASK_REQUEST,
  TASK_SUCCESS,
  UPDATE_TASK,
} from "./actionType";

export const getTask = () => async (dispatch) => {
  const token = localStorage.getItem("token") || null;
  dispatch({ type: TASK_REQUEST });
  axios
    .get(`http://localhost:8080/task`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: TASK_SUCCESS, payload: res.data.tasks });
    })
    .catch((err) => {
      dispatch({ type: TASK_FALIURE });
      console.log(err.message);
    });
};

export const createTask = (task) => async (dispatch) => {
  const token = localStorage.getItem("token") || null;
  dispatch({ type: TASK_REQUEST });
  return axios.post(`http://localhost:8080/task/create`, task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteTask = (project_name, _id) => async (dispatch) => {
  const token = localStorage.getItem("token") || null;

  dispatch({ type: TASK_REQUEST });
  return axios(`http://localhost:8080/task/delete/${_id}`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      project_name,
    },
  });
};

export const updateTask = (task, _id) => async (dispatch) => {
  const token = localStorage.getItem("token") || null;

  dispatch({ type: UPDATE_TASK });
  return axios.patch(`http://localhost:8080/task/update/${_id}`,task,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};


export const getProject = () => async (dispatch) => {
   const token = localStorage.getItem("token") || null;
   dispatch({ type: TASK_REQUEST });
   axios
     .get(`http://localhost:8080/project`, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((res) => {
       console.log(res);
       dispatch({ type: GET_PROJECT, payload: res.data.projects });
     })
     .catch((err) => {
       dispatch({ type: TASK_FALIURE });
       console.log(err.message);
     });
 };
