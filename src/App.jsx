import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/header/Nav/home/Dashboard';
import Header from './component/header/Header'
import Profile from './component/header/Nav/Profile'
import About from './component/header/Nav/About'
import './App.css'
import NotFound from './component/header/Nav/NotFound';
import Login from './component/login/Login';
import Cart from './component/header/Cart';
import AuthContext from './component/Authentication/AuthContext';
import DataProvider from './component/data provider/DataProvider.jsx'
import Detail from './component/detail Page/Detail';


function App() {




  return (
    <>



      <Router>
        <DataProvider>
          <Header />

          <Routes>

            <Route path='/' element={<Dashboard />} ></Route>
            <Route path='/profile' element={<AuthContext><Profile /></AuthContext>} ></Route>
            <Route path='/about' element={<AuthContext><About /></AuthContext>} ></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cart' element={<AuthContext><Cart /></AuthContext>} ></Route>
            <Route path='*' element={<NotFound />} />
            <Route path='/home/:id' element={<Detail/>}/>
          </Routes>
        </DataProvider>
      </Router>
    
    </>
  )
}

export default App
