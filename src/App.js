import { Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Users from './pages/Users';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavBar />
      <main className='container mx-auto px-3 pb-12'>
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:login' element={<Users />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
