import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ModalStructure from './Modal';
import { Button } from 'reactstrap';
import Card from './Card';
import Navbar from '../layout/Navbar';
import Search from './search';

const Home = () => {
  const [users, setUser] = useState([]);
  const [store, setStore] = useState([]);
  const [userviewdat, setUser1] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3003/users');
    setUser(result.data.reverse());
    setStore(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  const openVIewPopup = () => {
    setPopup(!popup);
  };
  const viewDatapopup = async (ids) => {
    const result = await axios.get(`http://localhost:3003/users/${ids}`);
    //  console.log(result.data);
    setUser1(result.data);
  };
  const viewDetailsHandler = (ids) => {
    viewDatapopup(ids);
    openVIewPopup();
  };

  const changeHandler = async (e, user) => {
    if (e.target.value) {
      user.status = e.target.value;
      await axios.put(`http://localhost:3003/users/${user.id}`, user);
      loadUsers();
    }
  };

  const searchHandler = (event) => {
    const regex = new RegExp(event.target.value, 'mgi');
    setUser(store.filter((v) => regex.test(v.description) || regex.test(v.task)));
  };

  const modalTitle = 'User Detail';
  return (
    <>
      <Search searchHandler={searchHandler} />
      <div className="container-fluid p-3">
        <div className="row mt-2">        
          <div className="col">
            <Button color="primary" className="header add mb-2">
              <Link to="/users/add" className="btn btn-outline-light">
                <i className="fa plus">+</i>{' '}
              </Link>
              Todays Tasks ({users.filter((v) => v.status === 'add').length})
            </Button>
            <div className="card">
              <div className="card-body">
                <Card
                  users={users.filter((v) => v.status === 'add')}
                  deleteUser={deleteUser}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <Button color="primary" className="d-block header mb-2">
              Pending ({users.filter((v) => v.status === 'pending').length})
            </Button>
            <div className="card">
              <div className="card-body">
                <Card
                  users={users.filter((v) => v.status === 'pending')}
                  deleteUser={deleteUser}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <Button color="primary" className="d-block header mb-2">
              Abandoned ({users.filter((v) => v.status === 'abandoned').length})
            </Button>
            <div className="card">
              <div className="card-body">
                <Card
                  users={users.filter((v) => v.status === 'abandoned')}
                  deleteUser={deleteUser}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="col">
          <Button color="primary" className="d-block header mb-2">
              In Progress ({users.filter((v) => v.status === 'in-progress').length})
            </Button>
            <div className="card">
              <div className="card-body">
                <Card
                  users={users.filter((v) => v.status === 'in-progress')}
                  deleteUser={deleteUser}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <Button color="primary" className="d-block header mb-2">
              Completed ({users.filter((v) => v.status === 'completed').length})
            </Button>
            <div className="card">
              <div className="card-body">
                <Card
                  users={users.filter((v) => v.status === 'completed')}
                  deleteUser={deleteUser}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <ModalStructure
          isPopup={popup}
          toggle={viewDetailsHandler}
          buttonLabel={modalTitle}
          userviewdat={userviewdat}
        />
      </div>
    </>
  );
};

export default Home;
