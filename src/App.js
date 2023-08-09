// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
//import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
import { useContext } from 'react';


const App = () => {
  const {} = useContext()

  return (
    <>
 <Router>
  <Header />
  <AnimRoutes />
  </Router>
  {/* cursor */}
  <motion.div className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50'></motion.div>
  </>
  );
};

export default App;
