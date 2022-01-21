import React from 'react';
import UsersSearch from '../components/users/UsersSearch';
import UsersResults from './../components/users/UsersResults';

const Home = () => {
  return (
    <>
      <UsersSearch />
      <UsersResults />
    </>
  );
};

export default Home;
