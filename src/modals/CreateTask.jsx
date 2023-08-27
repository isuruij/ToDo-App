import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CreateTask({ modal, toggle, save }) {
  const [taskName, settaskName] = useState("");
  const [description, setdescription] = useState("");

  const handleSave = () => {
    var taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave} >
            Create Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
