import React, { useState, useEffect } from "react";
import axios from "axios";
import { Taskitem } from "./Taskitem/Taskitem";
import "./TasksList.scss";
import { AddTask } from "../AddTask/AddTask";
import { Link } from "react-router-dom";

const urlApi = "https://62431f84b6734894c15b41ad.mockapi.io/tasks";
export const TasksList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(urlApi)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const addTask = (task)=>{
    axios.post(urlApi,task).then(()=>{
       getData();
    })
  }
  const getTaskId= (id)=>{
   return axios.get(`${urlApi}/${id}`)
    .then((res)=>res.data)
  }
  const deleteTask = (id) => {
    axios
      .delete(`${urlApi}/${id}`)
      .then(() => getData())
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios.get(urlApi).then((res) => setData(res.data));
  };
  const toggleReminder =async(id)=>{
    const taskToToggle = await getTaskId(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    // axios.put(`${urlApi}/${id}`)
    // .then((res)=>setData(data.map((taskItem)=>taskItem.id===id ? {...taskItem,reminder:res.data.reminder}:taskItem)))
    // .catch((error)=>{
    //     console.log(error)
    // })
    axios({
      url:`${urlApi}/${id}`,
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(updTask)
    }).then((response) => {
      return response.data;
    }).then(()=>getData())
  }
  return (
    <div className="task">
     <AddTask onAddTask={addTask} ></AddTask>
      <Taskitem data={data} deleteTask={deleteTask} onReminder={toggleReminder} />
      <Link to="/about">
          <h3>About</h3>
        </Link> 
    </div>
  );
};
