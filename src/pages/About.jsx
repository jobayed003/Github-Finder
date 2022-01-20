import React from 'react';

const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This project is part of my
        <strong>
          {' '}
          <a href='https://github.com/jobayed003/Github-Finder'>React Projects!</a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Coded by:
        <a className='text-white' href='https://twitter.com/MdJobayed803'>
          {' '}
          Jobayed Hossain
        </a>
      </p>
    </>
  );
};

export default About;
