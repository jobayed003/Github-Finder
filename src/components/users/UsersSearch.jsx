import { useContext, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';

const UsersSearch = () => {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      setAlert('Please type something', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const clearHandler = () => {
    clearUsers();
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                type='submit'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearHandler}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
