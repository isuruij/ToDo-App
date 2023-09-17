import React, { useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import { useState } from "react";
import Card from "./Card";
import Clock from "./Clock";
import DateTimeComponent from "./DateTimeComponent";

export default function TodoList() {
  const [modal, setModal] = useState(false);
  // Array to hold task objects we are creating
  const [taskList, settaskList] = useState([]);

  // This useeffect get saved task list from local stroage and assign it to taskList
  // variable when page is only reloading.
  useEffect(() => {
    var arr = localStorage.getItem("taskList");
    if (arr) {
      var obj = JSON.parse(arr);
      settaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    var templist = taskList;
    templist.splice(index, 1);
    settaskList(templist);
    localStorage.setItem("taskList", JSON.stringify(templist));
    // reload the webpage after deleting the item
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    var tempList = taskList;
    tempList[index] = obj;
    settaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  // Add new task to the TaskList
  const saveTask = (taskObj) => {
    var tempList = taskList;
    tempList.push(taskObj);
    // saving tasklist to local stroage
    localStorage.setItem("taskList", JSON.stringify(tempList));
    settaskList(tempList);
    setModal(false);
  };

  return (
    <div>
      <div className="header text-center">
        <div className="start">
          <h3>TodoList</h3>
          
          <button
            className="btn btn-primary"
            onClick={() => {
              setModal(true);
            }}
          >
            Create Task
          </button>
          <br></br>
          <br></br>
          
          <Clock></Clock>
          <DateTimeComponent></DateTimeComponent>
          
        </div>
      </div>
      <div className="devider">
        
      </div>
      <div className="task-container ">
        {taskList &&
          taskList.map((obj, index) => {
            return (
              <Card
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            );
          })}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
}
