import React, { useState, Fragment } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [show, setShow] = useState(false);

  // edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5001/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(await response.json());

      setShow(false); // close modal
      window.location = "/"; // reload (temporary)
    } catch (err) {
      console.error(err.message);
    }
  };

  // reset and close modal
  const handleClose = () => {
    setDescription(todo.description); // reset to original value
    setShow(false);
  };

  return (
    <Fragment>
      {/* Button to open modal */}
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          setShow(true);
          setDescription(todo.description); // ensure fresh description each time
        }}
      >
        Edit
      </button>

      {/* Modal */}
      {show && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          id={`id${todo.todo_id}`}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">Edit Todo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={updateDescription}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditTodo;
