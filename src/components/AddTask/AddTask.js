import React, { useState } from "react";

import "./AddTask.scss";

export const AddTask = ({onAddTask}) => {
  const [text, setTask] = useState("");
  const [day, setDayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTask({ text, day, reminder });
    setTask("");
    setDayTime("");
  };
  return (
    <form className="form-add-task" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="taskName">Task Name</label>
        <input
        value={text}
          type="text"
          id="taskName"
          placeholder=" enter Task Name"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="dayTime">Day & time</label>
        <input
        value={day}
          type="text"
          id="dayTime"
          placeholder=" enter day and Time"
          onChange={(e) => setDayTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check ">
        <label htmlFor="checked">Set reminder</label>
        <input
        checked={reminder}
          type="checkbox"
          id="checked"
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        />
      </div>
      <input type="submit" className="btn btn-block" />
    </form>
  );
};
