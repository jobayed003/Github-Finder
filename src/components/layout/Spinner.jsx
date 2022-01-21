import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt='Loading...' width={180} className='tex-center mx-auto'></img>
    </div>
  );
};

export default Spinner;
