import React, { useState, useEffect } from "react";
import axios from "axios";
import { Taskitem } from "./Taskitem/Taskitem";
import "./TasksList.scss";
import { AddTask } from "../AddTask/AddTask";

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
  const deleteTask = (id) => {
    axios
      .delete(`${urlApi}/${id}`)
      .then(() => getData())
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios.get(urlApi).then((res) => setData(res.data));
  };
  const toggleReminder =(id,reminder)=>{
    axios.put(`${urlApi}/${id}`,reminder)
    .then(()=>getData())
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div className="task">
     <AddTask onAddTask={addTask} ></AddTask>
      <Taskitem data={data} deleteTask={deleteTask} onReminder={toggleReminder} />
    </div>
  );
};
