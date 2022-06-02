
import React from "react";
import './Taskitem.scss'
export const Taskitem = ({ data,deleteTask,onReminder }) => {

  return (
    <>
      {data.map((item) => {
        return (
          <div className={item.reminder ? 'task-item':'item-task'}  key={item.id} onDoubleClick={()=>onReminder(item.id)} >
            <h3>
              {item.text}
              <span onClick={()=>deleteTask(item.id)} style={{ color: "red", cursor: "pointer" }} >&times;</span>
            </h3>
            <p>{item.day}</p>
          </div>
        );
      })}
    </>
  );
};
