import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { users, deleteUser, changeHandler } = props;

  return (
    <>
      {users.map((user, index) => {
        return (
          <div className="sub-card mb-2">
            <div className="card-body">
              <h6 className="task">
                <u>{user.task}</u>
              </h6>
              <div className="description">{user.description}</div>
              <div className="text-right mt-3 d-flex">
              <select className="custom-select mr-1" onChange={(e) => changeHandler(e, user)}>
                  <option value="">Status</option>
                  <option value="add">Add</option>
                  <option value="pending">Pending</option>
                  <option value="abandoned">Abandoned</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <Link className="btn btn-outline-primary mx-1" to={`/users/edit/${user.id}`}>
                  Edit
                </Link>
                <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Link>
                
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
