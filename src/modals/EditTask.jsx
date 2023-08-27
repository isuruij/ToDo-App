import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ modal, toggle, updateTask, taskObj }) {
  const [taskName, settaskName] = useState("");
  const [description, setdescription] = useState("");

  useEffect(()=>{
    settaskName(taskObj.Name)
    setdescription(taskObj.Description)
  },[])

  const handleUpdate = (e) => {
    e.preventDefault()
    var tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = description
    updateTask(tempObj)


  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={(e) => {
                  settaskName(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate} >  
           Update Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;
