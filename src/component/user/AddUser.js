import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    task: '',
    description: '',
    status: 'add',
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { task, description } = user;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post('http://localhost:3003/users', user);
    history.push('/');
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4 mt-4 card customCard">
          <div className="card-body">
            <h4>Add New Task</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type="text"
                className="form-control mt-2"
                onChange={(e) => onInputChange(e)}
                value={task}
                name="task"
                placeholder="Enter Task"
              />
              <input
                type="text"
                className="form-control mt-2"
                onChange={(e) => onInputChange(e)}
                value={description}
                name="description"
                placeholder="Enter Description"
              />
              <button className="btn btn-primary m-auto mt-2">Add Task</button>
              <Link to="/" className="btn btn-outline-light">
                {' '}
                <button className="btn btn-primary m-auto mt-2">Back</button>{' '}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
