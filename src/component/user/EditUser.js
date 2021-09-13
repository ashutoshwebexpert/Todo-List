import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    task: '',
    description: '',
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const { task, description } = user;
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push('/');
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4 mt-4 card customCard">
          <div className="card-body">
            <h4>Edit A User</h4>
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
              <button className="btn btn-primary m-auto mt-2">Update Task</button>
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

export default EditUser;
