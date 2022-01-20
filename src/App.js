import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavBar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/notfound' element={<NotFound />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
